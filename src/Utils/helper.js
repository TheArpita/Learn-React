export function filterData (searchedValue, allRestuarentList) {
    if(!searchedValue) return allRestuarentList;
    else
    {
        const data = allRestuarentList?.filter((restData) => 
        restData?.data?.name?.toLowerCase().includes(searchedValue.toLowerCase()));
        return data;
    }
}