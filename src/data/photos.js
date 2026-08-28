function randomSize(min, max) {
  const value = Math.random() * (max - min) + min
  return Math.round(value * 10) / 10
}

export const photos = [
  {
    id: 1,
    title: 'Pôr do sol na praia',
    capturedAt: '2026-06-12',
    isEdited: true,
    prompt: 'Realçar os tons alaranjados do céu e suavizar as nuvens',
    sizeMB: randomSize(3, 8),
    gradient: ['#ff9a76', '#ffcf7d'],
  },
  {
    id: 2,
    title: 'Retrato em preto e branco',
    capturedAt: '2026-05-02',
    isEdited: false,
    prompt: null,
    sizeMB: randomSize(25, 45),
    gradient: ['#94a3b8', '#e2e8f0'],
  },
  {
    id: 3,
    title: 'Paisagem urbana à noite',
    capturedAt: '2026-07-20',
    isEdited: true,
    prompt: 'Aumentar o contraste das luzes da cidade e reduzir o ruído',
    sizeMB: randomSize(3, 8),
    gradient: ['#4338ca', '#7c3aed'],
  },
  {
    id: 4,
    title: 'Café da manhã',
    capturedAt: '2026-07-01',
    isEdited: false,
    prompt: null,
    sizeMB: randomSize(25, 45),
    gradient: ['#f59e0b', '#fde68a'],
  },
  {
    id: 5,
    title: 'Trilha na montanha',
    capturedAt: '2026-04-15',
    isEdited: true,
    prompt: 'Deixar o verde da vegetação mais vibrante e o céu mais nítido',
    sizeMB: randomSize(3, 8),
    gradient: ['#15803d', '#86efac'],
  },
  {
    id: 6,
    title: 'Cachorro no parque',
    capturedAt: '2026-08-10',
    isEdited: false,
    prompt: null,
    sizeMB: randomSize(25, 45),
    gradient: ['#0ea5e9', '#a5f3fc'],
  },
]
