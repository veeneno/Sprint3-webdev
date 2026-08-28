import { useMemo, useState } from 'react'
import Layout from '../components/Layout'
import PhotoCard from '../components/PhotoCard'
import PhotoModal from '../components/PhotoModal'
import GalleryFilters from '../components/GalleryFilters'
import { photos } from '../data/photos'

function Dashboard() {
  const [statusFilter, setStatusFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const availableDates = useMemo(() => {
    const uniqueDates = [...new Set(photos.map((photo) => photo.capturedAt))]
    return uniqueDates.sort((a, b) => new Date(b) - new Date(a))
  }, [])

  const filteredPhotos = photos.filter((photo) => {
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'edited' && photo.isEdited) ||
      (statusFilter === 'raw' && !photo.isEdited)

    const matchesDate = dateFilter === 'all' || photo.capturedAt === dateFilter

    return matchesStatus && matchesDate
  })

  return (
    <Layout>
      <div className="dashboard-page">
        <div className="dashboard-header">
          <h1>Minhas Fotos</h1>
          <p>
            {filteredPhotos.length} de {photos.length} fotos
          </p>
        </div>

        <GalleryFilters
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          dateFilter={dateFilter}
          onDateChange={setDateFilter}
          availableDates={availableDates}
        />

        {filteredPhotos.length === 0 ? (
          <p className="empty-state">Nenhuma foto encontrada com esses filtros.</p>
        ) : (
          <div className="photo-grid">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onSelect={() => setSelectedPhoto(photo)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </Layout>
  )
}

export default Dashboard
