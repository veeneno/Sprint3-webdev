function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('pt-BR')
}

function GalleryFilters({ statusFilter, onStatusChange, dateFilter, onDateChange, availableDates }) {
  return (
    <div className="gallery-filters">
      <div className="filter-group">
        <label htmlFor="status-filter">Status</label>
        <select
          id="status-filter"
          value={statusFilter}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value="all">Todas</option>
          <option value="edited">Editadas</option>
          <option value="raw">Não editadas (RAW)</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="date-filter">Data</label>
        <select
          id="date-filter"
          value={dateFilter}
          onChange={(event) => onDateChange(event.target.value)}
        >
          <option value="all">Todas as datas</option>
          {availableDates.map((date) => (
            <option key={date} value={date}>
              {formatDate(date)}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default GalleryFilters
