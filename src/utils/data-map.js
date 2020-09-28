export const mapData = (data) => {
  if (!data) return null;

  return data.c.map((item, index) => {
    const readableDate = new Date(data.t[index] * 1000);
    return { x: readableDate, y: parseInt(item, 10) };
  });
};
