export default function Page() {
  return (
    <div className="gap-4 p-4 border border-gray-200">
      <div className="h-28 mb-4 rounded-xl bg-muted/50"></div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
    </div>
  )
}
