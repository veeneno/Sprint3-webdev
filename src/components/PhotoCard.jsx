function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('pt-BR')
}

function PhotoCard({ photo, onSelect }) {
  const thumbnailStyle = {
    background: `linear-gradient(135deg, ${photo.gradient[0]}, ${photo.gradient[1]})`,
  }

  return (
    <button type="button" className="photo-card" onClick={onSelect}>
      <div className="photo-thumbnail" style={thumbnailStyle}>
        <span className="photo-icon">📷</span>
      </div>
      <div className="photo-info">
        <p className="photo-title">{photo.title}</p>
        <p className="photo-date">{formatDate(photo.capturedAt)}</p>
        <span className={`photo-badge ${photo.isEdited ? 'badge-edited' : 'badge-raw'}`}>
          {photo.isEdited ? 'Editada com IA' : 'RAW'}
        </span>
      </div>
    </button>
  )
}

export default PhotoCard
