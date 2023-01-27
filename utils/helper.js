export const filterData = (searchValue,allRestaurants)=>{
  return  allRestaurants.filter(restaurant=>restaurant?.data?.name.toLowerCase().includes(searchValue.toLowerCase())); 
}