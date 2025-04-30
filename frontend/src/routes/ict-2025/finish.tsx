import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ict-2025/finish')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ict-2025/finish"!</div>
}
