type filterByPrice = "lower" | "higher";

export interface ISearchParams {
  categoryId?: string;
  subCategotyId?: string;
  salersId?: string;
  filterByPrice?: filterByPrice;
  priceRange?: string;
  page?: string;
  limit?: string;
  keyword?: string;
}
