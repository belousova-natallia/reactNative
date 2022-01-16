export const getToken = async (username: string, password: string) => {
  try {
    const response = await fetch(
      'https://stoplight.io/mocks/spark-solutions/api-v2/3124958/spree_oauth/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          grant_type: 'password',
          username,
          password,
        }),
      },
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
