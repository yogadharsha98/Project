export const userColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "user",
    headerName: "User",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 170,
  },

  {
    field: "country",
    headerName: "country",
    width: 100,
  },
  
  {
    field: "city",
    headerName: "city",
    width: 100,
  },
  {
    field: "phone",
    headerName: "phone",
    width: 100,
   
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

export const flightsColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "from",
    headerName: "From",
    width: 100,
  },
  {
    field: "to",
    headerName: "To",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 150,
  },
  {
    field: "cheapestPrice",
    headerName: "Cheapest Price",
    width: 100,
  },
];

export const flightBookingColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "flightName",
    headerName: "Flight Name",
    width: 100,
  },
  {
    field: "to",
    headerName: "To",
    width: 90,
  },
  {
    field: "from",
    headerName: "From",
    width: 90,
  },
  {
    field: "name",
    headerName: "name",
    width: 90,
  },
  {
    field: "email",
    headerName: "Email",
    width: 120,
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  {
    field: "class",
    headerName: "Class",
    width: 70,
  },
  {
    field: "price",
    headerName: "Price",
    width: 70,
  },
];

export const retreatColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "location",
    headerName: "Location",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 150,
  },
  {
    field: "cheapestPrice",
    headerName: "Cheapest Price",
    width: 100,
  },
];

export const retreatBookingColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "retreatId",
    headerName: "Retreat Id",
    width: 100,
  },
  {
    field: "retreatTitle",
    headerName: "Title",
    width: 100,
  },
  {
    field: "location",
    headerName: "Location",
    width: 90,
  },
  
  {
    field: "name",
    headerName: "name",
    width: 90,
  },
  {
    field: "email",
    headerName: "Email",
    width: 120,
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  {
    field: "price",
    headerName: "Price",
    width: 70,
  },
];
