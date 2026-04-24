/**
 * MARKET DATA — Compiled from Inside Airbnb, AirDNA public reports, STR Global
 * Fields: avg_nightly (€), occupancy_pct (annual), seasonality (array of peak months),
 *         competition (low/medium/high), trend (up/stable/down), notes
 *
 * Updated: Q1 2026
 */

export const MARKET_DATA = {
  // ── SPAIN ──────────────────────────────────────────────────────────
  "barcelona": {
    country: "España", currency: "€",
    avg_nightly: 115, weekend_premium: 1.32,
    occupancy_pct: 78, peak_occupancy: 91,
    peak_months: ["Junio", "Julio", "Agosto", "Septiembre"],
    competition: "high",
    avg_listings: 18200,
    trend: "up",
    notes: "Mercado muy maduro. Alta demanda internacional todo el año. Regulación creciente (licencias turísticas limitadas). Ventaja competitiva: calidad y diferenciación."
  },
  "madrid": {
    country: "España", currency: "€",
    avg_nightly: 98, weekend_premium: 1.28,
    occupancy_pct: 74, peak_occupancy: 88,
    peak_months: ["Mayo", "Junio", "Septiembre", "Octubre", "Diciembre"],
    competition: "high",
    avg_listings: 14500,
    trend: "up",
    notes: "Demanda urbana y de negocios estable. Menos estacional que Barcelona. Crecimiento sostenido en zonas como Malasaña, Chueca, Retiro."
  },
  "sevilla": {
    country: "España", currency: "€",
    avg_nightly: 82, weekend_premium: 1.35,
    occupancy_pct: 70, peak_occupancy: 92,
    peak_months: ["Marzo", "Abril", "Mayo", "Octubre"],
    competition: "medium",
    avg_listings: 5800,
    trend: "up",
    notes: "Semana Santa y Feria de Abril generan picos brutales (x3 precio normal). Alta estacionalidad. Barrios como Triana y Casco Antiguo son los más rentables."
  },
  "valencia": {
    country: "España", currency: "€",
    avg_nightly: 80, weekend_premium: 1.30,
    occupancy_pct: 71, peak_occupancy: 89,
    peak_months: ["Marzo", "Julio", "Agosto", "Septiembre"],
    competition: "medium",
    avg_listings: 6200,
    trend: "up",
    notes: "Las Fallas (Marzo) pica a precios x4. Ciudad en pleno auge turístico. Playa + cultura. Buena relación rentabilidad/precio de compra."
  },
  "malaga": {
    country: "España", currency: "€",
    avg_nightly: 90, weekend_premium: 1.38,
    occupancy_pct: 73, peak_occupancy: 94,
    peak_months: ["Junio", "Julio", "Agosto", "Septiembre"],
    competition: "medium",
    avg_listings: 7100,
    trend: "up",
    notes: "Costa del Sol sigue creciendo. Temporada alta muy fuerte. Aeropuerto internacional con conexiones directas de toda Europa."
  },
  "granada": {
    country: "España", currency: "€",
    avg_nightly: 72, weekend_premium: 1.30,
    occupancy_pct: 67, peak_occupancy: 85,
    peak_months: ["Marzo", "Abril", "Mayo", "Octubre", "Noviembre"],
    competition: "medium",
    avg_listings: 3400,
    trend: "stable",
    notes: "Turismo cultural (Alhambra) estable todo el año. Menos afectado por estacionalidad que la costa."
  },
  "palma de mallorca": {
    country: "España", currency: "€",
    avg_nightly: 128, weekend_premium: 1.40,
    occupancy_pct: 65, peak_occupancy: 96,
    peak_months: ["Junio", "Julio", "Agosto"],
    competition: "high",
    avg_listings: 9200,
    trend: "stable",
    notes: "Alta temporada extrema (verano). Invierno muy bajo. Regulación estricta. Premium por calidad y ubicación muy marcado."
  },
  "tenerife": {
    country: "España", currency: "€",
    avg_nightly: 88, weekend_premium: 1.20,
    occupancy_pct: 79, peak_occupancy: 92,
    peak_months: ["Diciembre", "Enero", "Febrero", "Marzo"],
    competition: "medium",
    avg_listings: 8700,
    trend: "up",
    notes: "Temporada inversa (los europeos huyen del frío). Ocupación muy alta y estable. Turismo de sol prácticamente todo el año."
  },
  "bilbao": {
    country: "España", currency: "€",
    avg_nightly: 85, weekend_premium: 1.30,
    occupancy_pct: 68, peak_occupancy: 84,
    peak_months: ["Agosto", "Septiembre", "Octubre"],
    competition: "low",
    avg_listings: 2100,
    trend: "up",
    notes: "Turismo en auge desde el Guggenheim. Semana Grande en Agosto. Menos saturado que otras ciudades grandes."
  },

  // ── MEXICO ─────────────────────────────────────────────────────────
  "cancun": {
    country: "México", currency: "USD",
    avg_nightly: 120, weekend_premium: 1.45,
    occupancy_pct: 74, peak_occupancy: 95,
    peak_months: ["Diciembre", "Enero", "Febrero", "Marzo", "Julio"],
    competition: "high",
    avg_listings: 12000,
    trend: "up",
    notes: "Uno de los destinos vacacionales más fuertes de Latinoamérica. Temporada alta diciembre-marzo (turismo americano). Semana Santa y verano también altos."
  },
  "mexico df": {
    country: "México", currency: "MXN",
    avg_nightly: 85, weekend_premium: 1.25,
    occupancy_pct: 68, peak_occupancy: 82,
    peak_months: ["Octubre", "Noviembre", "Marzo", "Abril"],
    competition: "medium",
    avg_listings: 22000,
    trend: "up",
    notes: "Mercado enorme y en crecimiento. Colonias como Roma, Condesa, Polanco concentran la mayor demanda. Turismo de negocios y cultural."
  },
  "playa del carmen": {
    country: "México", currency: "USD",
    avg_nightly: 95, weekend_premium: 1.40,
    occupancy_pct: 72, peak_occupancy: 93,
    peak_months: ["Diciembre", "Enero", "Febrero", "Marzo"],
    competition: "medium",
    avg_listings: 5800,
    trend: "up",
    notes: "Zona hotelera en auge. Turismo internacional. Competencia con hoteles pero ventaja en privacidad y precio para grupos."
  },
  "los cabos": {
    country: "México", currency: "USD",
    avg_nightly: 180, weekend_premium: 1.50,
    occupancy_pct: 71, peak_occupancy: 94,
    peak_months: ["Noviembre", "Diciembre", "Enero", "Febrero", "Marzo"],
    competition: "medium",
    avg_listings: 3200,
    trend: "up",
    notes: "Destino premium americano. ADR muy alto. Temporada alta octubre-abril. Verano más tranquilo pero precios sostenidos."
  },
  "guadalajara": {
    country: "México", currency: "MXN",
    avg_nightly: 65, weekend_premium: 1.28,
    occupancy_pct: 62, peak_occupancy: 78,
    peak_months: ["Octubre", "Noviembre", "Marzo"],
    competition: "low",
    avg_listings: 4100,
    trend: "up",
    notes: "Ciudad en crecimiento turístico. Segundo hub de negocios de México. Mercado menos saturado, buena oportunidad de posicionamiento."
  },

  // ── COLOMBIA ───────────────────────────────────────────────────────
  "cartagena": {
    country: "Colombia", currency: "COP",
    avg_nightly: 90, weekend_premium: 1.50,
    occupancy_pct: 73, peak_occupancy: 95,
    peak_months: ["Diciembre", "Enero", "Junio", "Julio"],
    competition: "medium",
    avg_listings: 4200,
    trend: "up",
    notes: "Ciudad amurallada UNESCO. Destino número 1 de Colombia. Temporada alta navidades y vacaciones de junio-julio. Precios premium en el centro histórico."
  },
  "medellin": {
    country: "Colombia", currency: "COP",
    avg_nightly: 55, weekend_premium: 1.35,
    occupancy_pct: 70, peak_occupancy: 87,
    peak_months: ["Diciembre", "Febrero", "Agosto"],
    competition: "medium",
    avg_listings: 6800,
    trend: "up",
    notes: "Ciudad de la eterna primavera. En fuerte auge turístico. El Poblado concentra la mayoría de listings. Temporada navideña y Feria de las Flores (agosto)."
  },
  "bogota": {
    country: "Colombia", currency: "COP",
    avg_nightly: 48, weekend_premium: 1.20,
    occupancy_pct: 62, peak_occupancy: 78,
    peak_months: ["Noviembre", "Diciembre", "Junio", "Julio"],
    competition: "medium",
    avg_listings: 9200,
    trend: "stable",
    notes: "Mercado de negocios principalmente. Temperatura constante (frío). Demanda corporativa estable. Chapinero y Usaquén son las zonas más rentables."
  },

  // ── PANAMA ─────────────────────────────────────────────────────────
  "panama city": {
    country: "Panamá", currency: "USD",
    avg_nightly: 72, weekend_premium: 1.30,
    occupancy_pct: 68, peak_occupancy: 85,
    peak_months: ["Diciembre", "Enero", "Febrero", "Marzo"],
    competition: "low",
    avg_listings: 2800,
    trend: "up",
    notes: "Hub financiero de Centroamérica. Mucho turismo de tránsito y negocios. Temporada seca (diciembre-abril) es la alta. Casco Viejo muy demandado."
  },

  // ── COSTA RICA ─────────────────────────────────────────────────────
  "san jose": {
    country: "Costa Rica", currency: "USD",
    avg_nightly: 65, weekend_premium: 1.25,
    occupancy_pct: 64, peak_occupancy: 80,
    peak_months: ["Diciembre", "Enero", "Febrero", "Marzo", "Julio"],
    competition: "low",
    avg_listings: 2200,
    trend: "stable",
    notes: "Puerta de entrada al turismo de Costa Rica. La mayoría de turistas la usa como escala. Más rentable orientarse a viajeros de negocios o escapadas cortas."
  },
  "guanacaste": {
    country: "Costa Rica", currency: "USD",
    avg_nightly: 110, weekend_premium: 1.45,
    occupancy_pct: 69, peak_occupancy: 94,
    peak_months: ["Diciembre", "Enero", "Febrero", "Marzo", "Abril"],
    competition: "medium",
    avg_listings: 3100,
    trend: "up",
    notes: "Costa del Pacífico. Playas de clase mundial. Temporada seca = alta turística. Mercado americano y canadiense muy fuerte. ADR premium en propiedades con piscina."
  },

  // ── ARGENTINA ──────────────────────────────────────────────────────
  "buenos aires": {
    country: "Argentina", currency: "USD",
    avg_nightly: 45, weekend_premium: 1.30,
    occupancy_pct: 66, peak_occupancy: 82,
    peak_months: ["Noviembre", "Diciembre", "Enero", "Febrero", "Marzo"],
    competition: "medium",
    avg_listings: 14000,
    trend: "up",
    notes: "Turismo internacional en auge por tipo de cambio favorable. Palermo, San Telmo y Recoleta lideran. Mercado en USD muy atractivo para propietarios locales."
  },
  "bariloche": {
    country: "Argentina", currency: "USD",
    avg_nightly: 80, weekend_premium: 1.55,
    occupancy_pct: 68, peak_occupancy: 96,
    peak_months: ["Julio", "Agosto", "Enero", "Febrero"],
    competition: "medium",
    avg_listings: 2800,
    trend: "up",
    notes: "Destino de ski en invierno + verano lacustre. Doble temporada alta. Picos de ocupación extremos en julio (vacaciones invierno). Propiedades con vista al lago x2 precio."
  },

  // ── CHILE ──────────────────────────────────────────────────────────
  "santiago": {
    country: "Chile", currency: "USD",
    avg_nightly: 68, weekend_premium: 1.28,
    occupancy_pct: 65, peak_occupancy: 80,
    peak_months: ["Enero", "Febrero", "Octubre", "Noviembre"],
    competition: "medium",
    avg_listings: 8500,
    trend: "stable",
    notes: "Mercado maduro. Turismo de negocios y cultural. Providencia y Las Condes son las zonas premium. Enero-Febrero altos por turismo de playa regional."
  },

  // ── PERU ───────────────────────────────────────────────────────────
  "lima": {
    country: "Perú", currency: "USD",
    avg_nightly: 55, weekend_premium: 1.22,
    occupancy_pct: 63, peak_occupancy: 79,
    peak_months: ["Julio", "Agosto", "Diciembre", "Enero"],
    competition: "low",
    avg_listings: 5200,
    trend: "up",
    notes: "Miraflores y Barranco dominan el mercado. Lima como gateway al turismo peruano (Machu Picchu). Buen potencial de crecimiento con turismo gastronómico en auge."
  },
  "cusco": {
    country: "Perú", currency: "USD",
    avg_nightly: 62, weekend_premium: 1.30,
    occupancy_pct: 71, peak_occupancy: 93,
    peak_months: ["Junio", "Julio", "Agosto", "Septiembre"],
    competition: "medium",
    avg_listings: 2100,
    trend: "up",
    notes: "Turismo arqueológico / Machu Picchu. Temporada seca (junio-septiembre) = alta turística mundial. Demanda muy fuerte e inelástica."
  },

  // ── URUGUAY ────────────────────────────────────────────────────────
  "punta del este": {
    country: "Uruguay", currency: "USD",
    avg_nightly: 130, weekend_premium: 1.60,
    occupancy_pct: 52, peak_occupancy: 98,
    peak_months: ["Diciembre", "Enero", "Febrero"],
    competition: "medium",
    avg_listings: 4800,
    trend: "stable",
    notes: "Temporada ultra-concentrada en verano austral (dic-feb). En enero se puede cobrar x4 precio base. Resto del año ocupación muy baja. Propiedades premium argentinas y brasileñas."
  },

  // ── DOMINICAN REPUBLIC ─────────────────────────────────────────────
  "punta cana": {
    country: "República Dominicana", currency: "USD",
    avg_nightly: 105, weekend_premium: 1.38,
    occupancy_pct: 76, peak_occupancy: 95,
    peak_months: ["Diciembre", "Enero", "Febrero", "Marzo", "Julio"],
    competition: "medium",
    avg_listings: 3900,
    trend: "up",
    notes: "Destino Caribbean premium. Fuerte demanda americana y europea. Competencia de all-inclusives pero los viajeros que buscan privacidad pagan más por villas."
  },
  "santo domingo": {
    country: "República Dominicana", currency: "USD",
    avg_nightly: 68, weekend_premium: 1.28,
    occupancy_pct: 63, peak_occupancy: 80,
    peak_months: ["Diciembre", "Enero", "Julio", "Agosto"],
    competition: "low",
    avg_listings: 2100,
    trend: "up",
    notes: "Capital económica. Turismo de negocios + city breaks. Zona Colonial es la más demandada. Mercado menos saturado con buenas oportunidades."
  },

  // ── PORTUGAL ───────────────────────────────────────────────────────
  "lisboa": {
    country: "Portugal", currency: "€",
    avg_nightly: 108, weekend_premium: 1.30,
    occupancy_pct: 77, peak_occupancy: 92,
    peak_months: ["Junio", "Julio", "Agosto", "Septiembre"],
    competition: "high",
    avg_listings: 11200,
    trend: "stable",
    notes: "Mercado muy maduro. Regulación creciente. Alfama y Chiado premium. Fuerte demanda todo el año gracias a conexiones aéreas low cost."
  },
  "oporto": {
    country: "Portugal", currency: "€",
    avg_nightly: 88, weekend_premium: 1.32,
    occupancy_pct: 73, peak_occupancy: 90,
    peak_months: ["Junio", "Julio", "Agosto", "Septiembre"],
    competition: "medium",
    avg_listings: 5400,
    trend: "up",
    notes: "Segunda ciudad de Portugal en fuerte crecimiento. Ribeira y Baixa son las zonas top. Menor regulación que Lisboa actualmente."
  },

  // ── PUERTO RICO ────────────────────────────────────────────────────
  "san juan pr": {
    country: "Puerto Rico", currency: "USD",
    avg_nightly: 135, weekend_premium: 1.45,
    occupancy_pct: 73, peak_occupancy: 94,
    peak_months: ["Diciembre", "Enero", "Febrero", "Marzo"],
    competition: "medium",
    avg_listings: 3800,
    trend: "up",
    notes: "Sin impuestos de extranjero para americanos (US territorio). Demanda muy fuerte de EEUU. San Juan Viejo y Condado son las zonas top. Mercado en auge post-pandemia."
  },

  // ── SPAIN (extendido) ──────────────────────────────────────────────
  "alicante": { country:"España", currency:"€", avg_nightly:78, weekend_premium:1.32, occupancy_pct:72, peak_occupancy:93, peak_months:["Junio","Julio","Agosto","Septiembre"], competition:"medium", avg_listings:4800, trend:"up", notes:"Costa Blanca. Playa urbana + Explanada. Turismo europeo (UK, Alemania, Países Bajos) muy fuerte. Invierno moderado atrae jubilados." },
  "ibiza": { country:"España", currency:"€", avg_nightly:210, weekend_premium:1.55, occupancy_pct:58, peak_occupancy:98, peak_months:["Junio","Julio","Agosto","Septiembre"], competition:"high", avg_listings:3900, trend:"stable", notes:"Temporada ultraconcentrada. Julio-agosto precios x3. Regulación estricta. Villas con piscina en Ibiza/Santa Eulalia son premium absoluto." },
  "san sebastian": { country:"España", currency:"€", avg_nightly:135, weekend_premium:1.40, occupancy_pct:70, peak_occupancy:95, peak_months:["Julio","Agosto","Septiembre"], competition:"medium", avg_listings:2200, trend:"up", notes:"Ciudad gourmet UNESCO. ADR muy alto. Festival de cine de San Sebastián (septiembre) pico brutal. Playa de la Concha premium." },
  "zaragoza": { country:"España", currency:"€", avg_nightly:65, weekend_premium:1.25, occupancy_pct:62, peak_occupancy:78, peak_months:["Octubre","Abril","Mayo"], competition:"low", avg_listings:1600, trend:"stable", notes:"Mercado urbano de ferias y negocios. Menor turismo que otras capitales. Pilar (octubre) pico. Poco saturado, buena rentabilidad por coste de compra." },
  "cadiz": { country:"España", currency:"€", avg_nightly:85, weekend_premium:1.40, occupancy_pct:68, peak_occupancy:94, peak_months:["Julio","Agosto","Febrero"], competition:"medium", avg_listings:2100, trend:"up", notes:"Carnaval de Cádiz (febrero) pico x3. Verano playa urbana muy fuerte. Casco antiguo es la zona top." },
  "cordoba": { country:"España", currency:"€", avg_nightly:70, weekend_premium:1.28, occupancy_pct:65, peak_occupancy:88, peak_months:["Abril","Mayo","Octubre"], competition:"medium", avg_listings:1800, trend:"stable", notes:"Patios (mayo) y feria. Verano demasiado caluroso baja ocupación. Casco histórico UNESCO es el único barrio rentable." },
  "santander": { country:"España", currency:"€", avg_nightly:95, weekend_premium:1.38, occupancy_pct:63, peak_occupancy:92, peak_months:["Julio","Agosto"], competition:"low", avg_listings:1400, trend:"up", notes:"Norte de España en auge. Sardinero y centro. Verano muy fuerte, invierno bajo. UIMP (universidad de verano) aporta demanda extra agosto." },
  "girona": { country:"España", currency:"€", avg_nightly:95, weekend_premium:1.33, occupancy_pct:68, peak_occupancy:89, peak_months:["Junio","Julio","Agosto","Septiembre"], competition:"medium", avg_listings:1900, trend:"up", notes:"Game of Thrones boost. Temporada flores (mayo) y verano. Base para Costa Brava. Barrio Judío el más rentable." },
  "salamanca": { country:"España", currency:"€", avg_nightly:72, weekend_premium:1.30, occupancy_pct:64, peak_occupancy:85, peak_months:["Abril","Mayo","Septiembre","Octubre"], competition:"low", avg_listings:900, trend:"stable", notes:"Turismo cultural UNESCO + ERASMUS. Plaza Mayor y Catedral. Mercado muy poco saturado, oportunidad clara." },
  "toledo": { country:"España", currency:"€", avg_nightly:78, weekend_premium:1.40, occupancy_pct:60, peak_occupancy:83, peak_months:["Abril","Mayo","Septiembre","Octubre"], competition:"low", avg_listings:800, trend:"stable", notes:"Escapada desde Madrid. Fines de semana y puentes son el 70% de los ingresos. Casco histórico UNESCO." },
  "marbella": { country:"España", currency:"€", avg_nightly:165, weekend_premium:1.45, occupancy_pct:68, peak_occupancy:96, peak_months:["Junio","Julio","Agosto","Septiembre"], competition:"high", avg_listings:5200, trend:"up", notes:"Costa del Sol premium. Puerto Banús y Nueva Andalucía. Turismo internacional de lujo. Villas con piscina ADR muy alto." },
  "las palmas": { country:"España", currency:"€", avg_nightly:82, weekend_premium:1.20, occupancy_pct:77, peak_occupancy:90, peak_months:["Noviembre","Diciembre","Enero","Febrero","Marzo"], competition:"medium", avg_listings:6400, trend:"up", notes:"Gran Canaria. Temporada invernal muy fuerte (clima perfecto). Las Canteras playa urbana top. Nómadas digitales en auge." },
  "la coruña": { country:"España", currency:"€", avg_nightly:75, weekend_premium:1.28, occupancy_pct:61, peak_occupancy:87, peak_months:["Julio","Agosto"], competition:"low", avg_listings:1200, trend:"stable", notes:"Norte verde. Verano playa + gastronomía. María Pita y Riazor las zonas top. Invierno muy bajo." },
  "vigo": { country:"España", currency:"€", avg_nightly:68, weekend_premium:1.25, occupancy_pct:58, peak_occupancy:82, peak_months:["Julio","Agosto"], competition:"low", avg_listings:900, trend:"stable", notes:"Puerta a las Rías Baixas e Islas Cíes. Turismo de cruceros. Mercado pequeño pero estable." },
  "murcia": { country:"España", currency:"€", avg_nightly:55, weekend_premium:1.22, occupancy_pct:55, peak_occupancy:75, peak_months:["Abril","Mayo","Septiembre"], competition:"low", avg_listings:700, trend:"stable", notes:"Mercado urbano con poco turismo. Semana Santa pico. Mejor orientarse a viajes de negocios y medios plazos." },
  "formentera": { country:"España", currency:"€", avg_nightly:240, weekend_premium:1.50, occupancy_pct:50, peak_occupancy:99, peak_months:["Junio","Julio","Agosto","Septiembre"], competition:"medium", avg_listings:1100, trend:"stable", notes:"Temporada 4 meses al año. Precios extremos. Oferta muy limitada por regulación. Ocupación casi 100% en verano." },
  "menorca": { country:"España", currency:"€", avg_nightly:155, weekend_premium:1.48, occupancy_pct:55, peak_occupancy:97, peak_months:["Junio","Julio","Agosto","Septiembre"], competition:"medium", avg_listings:2800, trend:"up", notes:"Isla tranquila y en auge. Mahón y Ciutadella. Regulación estricta. Invierno cerrado casi total." },
  "tarragona": { country:"España", currency:"€", avg_nightly:75, weekend_premium:1.35, occupancy_pct:64, peak_occupancy:88, peak_months:["Julio","Agosto"], competition:"low", avg_listings:1500, trend:"stable", notes:"Costa Dorada + ruinas romanas UNESCO. Turismo familiar. Salou cercano absorbe mucha demanda." },
  "valladolid": { country:"España", currency:"€", avg_nightly:58, weekend_premium:1.20, occupancy_pct:52, peak_occupancy:72, peak_months:["Octubre","Abril"], competition:"low", avg_listings:500, trend:"stable", notes:"Ferias y eventos corporativos. Turismo enogastronómico (Ribera del Duero). Mercado pequeño." },
  "benidorm": { country:"España", currency:"€", avg_nightly:88, weekend_premium:1.25, occupancy_pct:78, peak_occupancy:94, peak_months:["Junio","Julio","Agosto","Septiembre"], competition:"high", avg_listings:3600, trend:"stable", notes:"Mercado turístico masivo. Competencia de hoteles brutal. Apartamentos familia o grupos grandes con terraza son los más rentables." },

  // ── LATAM (extendido) ──────────────────────────────────────────────
  "tulum": { country:"México", currency:"USD", avg_nightly:185, weekend_premium:1.45, occupancy_pct:68, peak_occupancy:95, peak_months:["Diciembre","Enero","Febrero","Marzo"], competition:"high", avg_listings:4200, trend:"up", notes:"Destino premium/boho. ADR muy alto. Temporada dic-abril. Verano más suave pero jungla+cenotes sostienen. Villas con piscina top." },
  "merida": { country:"México", currency:"MXN", avg_nightly:70, weekend_premium:1.22, occupancy_pct:64, peak_occupancy:82, peak_months:["Noviembre","Diciembre","Enero","Febrero","Marzo"], competition:"low", avg_listings:2400, trend:"up", notes:"Capital yucateca en auge. Colonial, cultura maya. Expats americanos y canadienses. Mercado joven con mucho potencial." },
  "san miguel de allende": { country:"México", currency:"USD", avg_nightly:130, weekend_premium:1.35, occupancy_pct:68, peak_occupancy:90, peak_months:["Octubre","Noviembre","Diciembre","Enero","Febrero","Marzo"], competition:"medium", avg_listings:1900, trend:"up", notes:"Ciudad colonial top-voted USA. Demanda americana de lujo. ADR muy alto para México. Festival de cine y eventos culturales." },
  "oaxaca": { country:"México", currency:"MXN", avg_nightly:65, weekend_premium:1.30, occupancy_pct:60, peak_occupancy:88, peak_months:["Julio","Octubre","Noviembre","Diciembre"], competition:"low", avg_listings:1800, trend:"up", notes:"Día de Muertos y Guelaguetza disparan ocupación. Turismo gastronómico y cultural. Centro histórico es lo rentable." },
  "puerto vallarta": { country:"México", currency:"USD", avg_nightly:95, weekend_premium:1.38, occupancy_pct:70, peak_occupancy:93, peak_months:["Noviembre","Diciembre","Enero","Febrero","Marzo"], competition:"medium", avg_listings:3600, trend:"up", notes:"Pacífico mexicano. Zona Romántica muy demandada. Mercado LGBTQ+ fuerte. Turismo americano y canadiense." },

  "santa marta": { country:"Colombia", currency:"COP", avg_nightly:55, weekend_premium:1.32, occupancy_pct:66, peak_occupancy:90, peak_months:["Diciembre","Enero","Julio"], competition:"low", avg_listings:1800, trend:"up", notes:"Puerta a Tayrona y Sierra Nevada. Mercado en crecimiento. Rodadero y Centro histórico. Competencia baja." },
  "cali": { country:"Colombia", currency:"COP", avg_nightly:42, weekend_premium:1.28, occupancy_pct:60, peak_occupancy:78, peak_months:["Diciembre","Agosto"], competition:"low", avg_listings:2400, trend:"stable", notes:"Capital mundial de la salsa. Feria de Cali (diciembre) pico. Menos turístico pero demanda local y corporativa estable." },

  "mendoza": { country:"Argentina", currency:"USD", avg_nightly:50, weekend_premium:1.35, occupancy_pct:63, peak_occupancy:86, peak_months:["Febrero","Marzo","Octubre","Noviembre"], competition:"low", avg_listings:1800, trend:"up", notes:"Capital del vino argentino. Vendimia (marzo) pico. Bodegas y Aconcagua. Turismo enológico en fuerte alza." },
  "el calafate": { country:"Argentina", currency:"USD", avg_nightly:95, weekend_premium:1.40, occupancy_pct:62, peak_occupancy:95, peak_months:["Diciembre","Enero","Febrero","Marzo"], competition:"medium", avg_listings:900, trend:"up", notes:"Puerta al glaciar Perito Moreno. Temporada alta verano austral. Invierno muy bajo. Turismo internacional premium." },
  "cordoba ar": { country:"Argentina", currency:"USD", avg_nightly:42, weekend_premium:1.25, occupancy_pct:58, peak_occupancy:78, peak_months:["Enero","Febrero","Julio"], competition:"low", avg_listings:2200, trend:"stable", notes:"Segunda ciudad de Argentina. Turismo estudiantil y serrano. Nueva Córdoba zona top." },

  "valparaiso": { country:"Chile", currency:"USD", avg_nightly:55, weekend_premium:1.35, occupancy_pct:62, peak_occupancy:85, peak_months:["Enero","Febrero","Diciembre"], competition:"medium", avg_listings:1800, trend:"stable", notes:"Ciudad UNESCO colorida. Año nuevo (fuegos artificiales) pico. Cerros Alegre y Concepción premium." },
  "viña del mar": { country:"Chile", currency:"USD", avg_nightly:75, weekend_premium:1.45, occupancy_pct:58, peak_occupancy:92, peak_months:["Enero","Febrero"], competition:"medium", avg_listings:2200, trend:"stable", notes:"Balneario chileno principal. Festival (febrero) pico brutal. Resto del año muy bajo." },

  "arequipa": { country:"Perú", currency:"USD", avg_nightly:48, weekend_premium:1.25, occupancy_pct:61, peak_occupancy:85, peak_months:["Junio","Julio","Agosto","Septiembre"], competition:"low", avg_listings:1100, trend:"up", notes:"Ciudad Blanca UNESCO. Cañón del Colca. Centro histórico. Mercado en crecimiento." },

  "montevideo": { country:"Uruguay", currency:"USD", avg_nightly:60, weekend_premium:1.25, occupancy_pct:58, peak_occupancy:78, peak_months:["Diciembre","Enero","Febrero"], competition:"low", avg_listings:2400, trend:"stable", notes:"Capital tranquila. Pocitos y Punta Carretas zonas top. Turismo regional argentino y brasileño principal." },

  // ── CARIBE ─────────────────────────────────────────────────────────
  "la habana": { country:"Cuba", currency:"USD", avg_nightly:65, weekend_premium:1.20, occupancy_pct:55, peak_occupancy:82, peak_months:["Noviembre","Diciembre","Enero","Febrero","Marzo"], competition:"low", avg_listings:3800, trend:"stable", notes:"Casas particulares muy reguladas. Vedado y Habana Vieja top. Mercado con restricciones pero demanda internacional fuerte." },
  "nassau": { country:"Bahamas", currency:"USD", avg_nightly:210, weekend_premium:1.40, occupancy_pct:68, peak_occupancy:94, peak_months:["Diciembre","Enero","Febrero","Marzo","Abril"], competition:"medium", avg_listings:1800, trend:"up", notes:"Caribe premium. Turismo americano. Paradise Island y Cable Beach. ADR muy alto." },
  "kingston": { country:"Jamaica", currency:"USD", avg_nightly:75, weekend_premium:1.28, occupancy_pct:58, peak_occupancy:80, peak_months:["Diciembre","Enero","Febrero","Julio"], competition:"low", avg_listings:1200, trend:"stable", notes:"Capital jamaicana. Turismo de negocios + cultural (reggae). Montego Bay y Negril dominan el turismo de playa." },

  // ── USA (relevante para expats hispanos) ───────────────────────────
  "miami": { country:"Estados Unidos", currency:"USD", avg_nightly:220, weekend_premium:1.45, occupancy_pct:70, peak_occupancy:94, peak_months:["Diciembre","Enero","Febrero","Marzo"], competition:"high", avg_listings:24000, trend:"stable", notes:"Mercado Latam muy fuerte. South Beach, Brickell, Wynwood. Regulación estricta en algunas zonas. Art Basel (dic) pico." },
  "orlando": { country:"Estados Unidos", currency:"USD", avg_nightly:165, weekend_premium:1.30, occupancy_pct:73, peak_occupancy:93, peak_months:["Marzo","Junio","Julio","Agosto","Diciembre"], competition:"high", avg_listings:18000, trend:"up", notes:"Disney + Universal. Casas grandes con piscina para familias son el producto estrella. Mucha demanda latina." },
  "new york": { country:"Estados Unidos", currency:"USD", avg_nightly:250, weekend_premium:1.35, occupancy_pct:76, peak_occupancy:92, peak_months:["Septiembre","Octubre","Noviembre","Diciembre"], competition:"high", avg_listings:21000, trend:"down", notes:"Regulación Local Law 18 ha reducido drásticamente la oferta legal. Solo estancias 30+ días legales en la mayoría de casos." },
  "los angeles": { country:"Estados Unidos", currency:"USD", avg_nightly:195, weekend_premium:1.35, occupancy_pct:68, peak_occupancy:88, peak_months:["Junio","Julio","Agosto","Septiembre"], competition:"high", avg_listings:19000, trend:"stable", notes:"Venice, Santa Monica, Hollywood. Regulación estricta (HSR). Licencia obligatoria. Mercado maduro." },

  // ── EUROPE ─────────────────────────────────────────────────────────
  "paris": { country:"Francia", currency:"€", avg_nightly:145, weekend_premium:1.32, occupancy_pct:74, peak_occupancy:91, peak_months:["Mayo","Junio","Julio","Septiembre","Octubre"], competition:"high", avg_listings:65000, trend:"down", notes:"Regulación estricta (120 días/año para residencia principal). JJOO 2024 ya pasaron. Marais, Saint-Germain zonas top." },
  "roma": { country:"Italia", currency:"€", avg_nightly:128, weekend_premium:1.30, occupancy_pct:75, peak_occupancy:92, peak_months:["Abril","Mayo","Junio","Septiembre","Octubre"], competition:"high", avg_listings:32000, trend:"stable", notes:"Mercado muy maduro. Jubileo 2025 boost. Trastevere y centro histórico premium." },
  "milan": { country:"Italia", currency:"€", avg_nightly:135, weekend_premium:1.28, occupancy_pct:72, peak_occupancy:90, peak_months:["Febrero","Abril","Septiembre","Octubre"], competition:"high", avg_listings:18000, trend:"stable", notes:"Ferias y moda. Fashion Week (febrero, septiembre) picos brutales. Brera, Navigli top." },
  "amsterdam": { country:"Países Bajos", currency:"€", avg_nightly:175, weekend_premium:1.32, occupancy_pct:73, peak_occupancy:91, peak_months:["Abril","Mayo","Junio","Julio","Agosto"], competition:"high", avg_listings:14000, trend:"down", notes:"Regulación muy estricta (30 noches/año). Licencia obligatoria. Mercado limitado pero ADR altísimo." },
  "berlin": { country:"Alemania", currency:"€", avg_nightly:105, weekend_premium:1.25, occupancy_pct:68, peak_occupancy:85, peak_months:["Mayo","Junio","Julio","Agosto","Septiembre"], competition:"medium", avg_listings:16000, trend:"stable", notes:"Zweckentfremdungsverbot (regulación). Mitte, Kreuzberg, Prenzlauer Berg zonas top." },
  "londres": { country:"Reino Unido", currency:"€", avg_nightly:180, weekend_premium:1.35, occupancy_pct:72, peak_occupancy:90, peak_months:["Mayo","Junio","Julio","Agosto","Septiembre","Diciembre"], competition:"high", avg_listings:45000, trend:"stable", notes:"90 días/año máximo sin licencia. Zonas 1-2 premium. Mercado muy competitivo." },
  "praga": { country:"Chequia", currency:"€", avg_nightly:95, weekend_premium:1.30, occupancy_pct:70, peak_occupancy:88, peak_months:["Abril","Mayo","Junio","Septiembre","Diciembre"], competition:"medium", avg_listings:11000, trend:"stable", notes:"Mercado maduro. Mercados de Navidad (diciembre) pico. Staré Mesto y Malá Strana top." },
  "viena": { country:"Austria", currency:"€", avg_nightly:115, weekend_premium:1.28, occupancy_pct:69, peak_occupancy:87, peak_months:["Abril","Mayo","Junio","Septiembre","Octubre","Diciembre"], competition:"medium", avg_listings:7400, trend:"stable", notes:"Mercado musical y cultural estable. Adviento pico. Innere Stadt y Neubau premium." },
  "atenas": { country:"Grecia", currency:"€", avg_nightly:85, weekend_premium:1.30, occupancy_pct:72, peak_occupancy:91, peak_months:["Mayo","Junio","Julio","Agosto","Septiembre"], competition:"medium", avg_listings:11000, trend:"up", notes:"Plaka, Koukaki, Monastiraki. Turismo cultural + puerta a islas griegas. ADR creciendo fuerte." },
  "estambul": { country:"Turquía", currency:"USD", avg_nightly:68, weekend_premium:1.25, occupancy_pct:66, peak_occupancy:85, peak_months:["Abril","Mayo","Junio","Septiembre","Octubre"], competition:"medium", avg_listings:13000, trend:"up", notes:"Mercado enorme. Sultanahmet, Taksim, Beyoglu. Licencia obligatoria desde 2024." },
  "dubai": { country:"EAU", currency:"USD", avg_nightly:195, weekend_premium:1.35, occupancy_pct:78, peak_occupancy:94, peak_months:["Noviembre","Diciembre","Enero","Febrero","Marzo"], competition:"high", avg_listings:18000, trend:"up", notes:"Invierno temporada alta (europeos huyen del frío). Verano bajísimo (calor extremo). Marina, Downtown, JBR premium." }
};

/**
 * Busca datos de mercado por ciudad (insensible a mayúsculas, acepta variantes)
 */
export function findMarketData(ciudad) {
  if (!ciudad) return null;

  const normalized = ciudad.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quitar acentos
    .replace(/[^a-z0-9\s]/g, '')
    .trim();

  // Búsqueda exacta primero
  if (MARKET_DATA[normalized]) return { city: normalized, data: MARKET_DATA[normalized] };

  // Búsqueda parcial
  for (const [key, data] of Object.entries(MARKET_DATA)) {
    const keyNorm = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (normalized.includes(keyNorm) || keyNorm.includes(normalized)) {
      return { city: key, data };
    }
  }

  return null;
}
