const ProductFilter = ({ setFilters }: any) => {
  return (
    <div className="flex gap-4 mb-6">
      <select
        onChange={(e) => setFilters((prev: any) => ({ ...prev, sort: e.target.value }))}
        className="border px-3 py-2 rounded"
      >
        <option value="">Sort</option>
        <option value="asc">Price Low-High</option>
        <option value="desc">Price High-Low</option>
      </select>
    </div>
  );
};

export default ProductFilter;