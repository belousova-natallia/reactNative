export const getProducts = async (
  link: string = 'https://rn-mentoring.herokuapp.com/api/v2/storefront/products',
) => {
  try {
    const response = await fetch(link);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await fetch(
      `https://rn-mentoring.herokuapp.com/api/v2/storefront/products/${id}`,
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
  }
};
