# 프로젝트 설명

> 한성대학교 축제 정보 및 소통 앱 (프론트엔드 전용)

## 코드 스타일


## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run lint      # ESLint check
npm run preview   # Preview production build
```

## Environment

Requires `.env` at the project root:
```
VITE_API_BASE_URL=https://3.34.22.86.nip.io
```

## Architecture

**React 19 + Vite SPA** for the 2025 Hansung University Festival.

### Routing (`src/App.jsx`)

React Router v7 with a single `RootLayout` (persistent `BottomNavBar` + `<Outlet />`). Routes: `/`, `/notice/:id`, `/booth`, `/community`, `/chatbot`, `/credits`.

### State Management (hybrid)

- **Zustand** (`src/stores/`) — primary global state:
  - `boothStore.js`: Caches booth data per category to avoid re-fetching on tab switches
  - `scheduleStore.js`: Schedule list + real-time status ("대기중"/"진행중"/"완료") computed from current time in minutes-since-midnight
  - `markerStore.js`: SVG map marker positions as percentage-based coordinates
- **Recoil** (`src/shared/state/Chatbot.js`) — single atom for chatbot open/close status only

### HTTP Layer

`src/api/axios.js` — centralized Axios instance using `VITE_API_BASE_URL`.

Custom hooks in `src/hooks/`: `useGet`, `usePost`, `usePatch`, `useDelete`. Each returns `{ data/post/patch/remove, loading, error }`. `usePost` handles `FormData` automatically.

### Key Features

**Booth Map** (`src/components/booth/`): SVG overlay with percentage-based marker positioning over a campus map image. Markers filter by category (체험부스/푸드트럭/프로모션). Clicking a marker scrolls the list to the corresponding item via `scrollIntoView`. Booth data is cached in Zustand per category.

**Real-time Chat** (`src/components/Community/`, `src/pages/chatbot/`): STOMP over SockJS WebSocket. Both community chat and AI chatbot use this connection.

**Schedule Status**: `scheduleStore` computes live/waiting/done by comparing `Date.now()` minutes-since-midnight against each schedule's start/end times. Past dates → "완료", future dates → "대기중".

### Styling

Styled-components v6. Global reset via `styled-reset`. Mobile-first with `--vh` CSS custom property for accurate viewport height on mobile browsers. Style files live in `src/styles/` mirroring the feature structure.

## Commit Convention (from README)

```
✨ Feat:     new feature
🐛 Fix:      bug fix
💄 Style:    UI/style changes
♻️  Refactor: refactoring
📝 Docs:     documentation
```

Branch: `feature/{feature-name}` → PR → `develop` → `main`
