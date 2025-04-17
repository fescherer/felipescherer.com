import Skeleton from 'react-loading-skeleton'

export function ProjectSkeleton() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:min-h-[680px] lg:grid-cols-3">
        {
        [0, 1, 2, 3, 4, 5].map(item => (
          <Skeleton
            baseColor="#b8bec7"
            highlightColor="#c3c9d3"
            key={item}
            count={1}
            className="h-[398px] w-70"
          />
        ))
      }
      </div>

      <div className="h-14" />
    </div>
  )
}
