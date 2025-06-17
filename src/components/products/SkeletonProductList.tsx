import SkeletonProductItem from './SkeletonProductItem';

interface SkeletonProductListProps {
  count: number;
  cols?: number;
}
const SkeletonProductList = ({ count, cols }: SkeletonProductListProps) => {
  let colClass = '';
  if (cols) {
    colClass =
      {
        1: 'lg:grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
        5: 'lg:grid-cols-5',
      }[cols] || 'lg:grid-cols-4';
  }

  return (
    <ul className={`grid gap-4 ${colClass} mb-4 grid-cols-2`}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonProductItem key={index} />
      ))}
    </ul>
  );
};

export default SkeletonProductList;
