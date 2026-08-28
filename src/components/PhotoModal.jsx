function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function daysAgo(dateString) {
  const captured = new Date(dateString)
  const today = new Date()
  const diffInMs = today - captured
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24))
}

function PhotoModal({ photo, onClose }) {
  const days = daysAgo(photo.capturedAt)
  const daysLabel = days <= 0 ? 'hoje' : `há ${days} dia${days > 1 ? 's' : ''}`

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <div
          className="modal-thumbnail"
          style={{ background: `linear-gradient(135deg, ${photo.gradient[0]}, ${photo.gradient[1]})` }}
        >
          <span className="photo-icon">📷</span>
        </div>

        <h2>{photo.title}</h2>

        <ul className="modal-details">
          <li>
            <span>Data</span>
            <strong>{formatDate(photo.capturedAt)} ({daysLabel})</strong>
          </li>
          <li>
            <span>Status</span>
            <strong>{photo.isEdited ? 'Editada com IA' : 'Modo RAW (sem edição)'}</strong>
          </li>
          <li>
            <span>Tamanho do arquivo</span>
            <strong>{photo.sizeMB} MB</strong>
          </li>
        </ul>

        {photo.isEdited ? (
          <div className="modal-prompt">
            <span>Prompt utilizado na edição</span>
            <p>"{photo.prompt}"</p>
          </div>
        ) : (
          <div className="modal-prompt modal-prompt-empty">
            <span>Nenhum prompt utilizado — arquivo RAW original</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default PhotoModal
