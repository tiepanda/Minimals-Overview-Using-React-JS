// data/dashboardData.js

// Import SVG icons
import analyticsIcon from "../images/page-icons/ic-analytics.svg";
import bankingIcon from "../images/page-icons/ic-banking.svg";
import blankIcon from "../images/page-icons/ic-blank.svg";
import bookingIcon from "../images/page-icons/ic-booking.svg";
import courseIcon from "../images/page-icons/ic-course.svg";
import dashboardIcon from "../images/page-icons/ic-dashboard.svg";
import ecommerceIcon from "../images/page-icons/ic-ecommerce.svg";
import fileIcon from "../images/page-icons/ic-file.svg";
import BookingDashboard from "../pages/BookingDashboard";

// Stats data for dashboard cards
export const statsData = [
  {
    id: "booking",
    title: "Total Booking",
    value: "714",
    icon: "Calendar2Check",
    color: "primary",
    percentage: "2.6",
    isPositive: true,
  },
  {
    id: "sold",
    title: "Sold",
    value: "311",
    icon: "CurrencyDollar",
    color: "success",
    percentage: "0.2",
    isPositive: true,
  },
  {
    id: "canceled",
    title: "Canceled",
    value: "124",
    icon: "People",
    color: "warning",
    percentage: "0.1",
    isPositive: false,
  },
];
// Add this to your existing dashboardData.js file

// dashboardData.js
export const incomeData = {
  totalIncome: 18765,
  percentageChange: 2.6,
  monthlyIncome: [
    { month: "Jan", value: 12500 },
    { month: "Feb", value: 13200 },
    { month: "Mar", value: 14000 },
    { month: "Apr", value: 1300 },
    { month: "May", value: 1400 },
    { month: "Jun", value: 1500 },
    { month: "Jul", value: 4900 },
    { month: "Aug", value: 5700 },
    { month: "Sep", value: 6500 },
    { month: "Oct", value: 7300 },
    { month: "Nov", value: 18200 },
    { month: "Dec", value: 18765 },
  ],
};

// Booking status data
export const bookedstatusdata = [
  {
    status: "PENDING",
    count: 9910,
    percentage: 75, // This represents how filled the progress bar should be (75%)
  },
  {
    status: "CANCELED",
    count: 1950,
    percentage: 30, // This represents how filled the progress bar should be (30%)
  },
  {
    status: "SOLD",
    count: 9120,
    percentage: 90, // This represents how filled the progress bar should be (90%)
  },
];

// Circular progress booking status data
export const bookedStatusCircularData = [
  {
    percentage: 73.9,
    count: 38566,
    label: "Sold",
    status: "sold",
  },
  {
    percentage: 45.6,
    count: 18472,
    label: "Pending for payment",
    status: "pending",
  },
];

// tours avabile  data
export const dashboardData = {
  tours: {
    totalTours: 186,
    soldOutTours: 120,
    availableTours: 66,
  },
  // other dashboard data...
};

export const statisticsData = {
  totals: {
    sold: 6790,
    canceled: 1230,
  },
};

// Weekly data for Statistics component
export const weeklyData = [
  { label: "Week 1", sold: 20, canceled: 17 },
  { label: "Week 2", sold: 38, canceled: 53 },
  { label: "Week 3", sold: 32, canceled: 75 },
  { label: "Week 4", sold: 150, canceled: 85 },
  { label: "Week 5", sold: 45, canceled: 97 },
];

// Monthly data for Statistics component
export const monthlyData = [
  { label: "Jan", sold: 80, canceled: 45 },
  { label: "Feb", sold: 110, canceled: 45 },
  { label: "Mar", sold: 120, canceled: 42 },
  { label: "Apr", sold: 85, canceled: 55 },
  { label: "May", sold: 100, canceled: 38 },
  { label: "Jun", sold: 110, canceled: 58 },
  { label: "Jul", sold: 112, canceled: 52 },
  { label: "Aug", sold: 105, canceled: 40 },
  { label: "Sep", sold: 90, canceled: 50 },
];

// Yearly data for Statistics component
export const yearlyData = [
  { label: "2018", sold: 75, canceled: 45 },
  { label: "2019", sold: 42, canceled: 25 },
  { label: "2020", sold: 28, canceled: 22 },
  { label: "2021", sold: 40, canceled: 42 },
  { label: "2022", sold: 26, canceled: 43 },
  { label: "2023", sold: 94, canceled: 42 },
];

// Add this to your existing dashboardData.js file

export const customerReviewsData = [
  {
    id: 1,
    name: "Jayvion Simon",
    avatar: "avatar-1.webp", // Using the actual path from your project
    datePosted: "06 Mar 2025 9:39 pm",
    rating: 4,
    comment:
      "Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.",
    tags: ["Great sevice", "Recommended", "Best price"],
  },
  {
    id: 2,
    name: "Lucian Obrien",
    avatar: "avatar-2.webp",
    datePosted: "05 Mar 2025 8:39 pm",
    rating: 3,
    comment:
      "Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium beatae modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.",
    tags: ["Great sevice", "Recommended", "Best price"],
  },
  {
    id: 3,
    name: "Deja Brady",
    avatar: "avatar-3.webp",
    datePosted: "04 Mar 2025 7:39 pm",
    rating: 5,
    comment:
      "Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsum et consequatur aperiam quia. Rerum nulla sequi recusandae illum velit quia quas. Et error laborum maiores cupiditate occaecati.",
    tags: ["Great sevice", "Recommended", "Best price"],
  },
  {
    id: 4,
    name: "Harrison Stein",
    avatar: "avatar-4.webp",
    datePosted: "03 Mar 2025 6:39 pm",
    rating: 4,
    comment:
      "Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.",
    tags: ["Great sevice", "Recommended", "Best price"],
  },
  {
    id: 5,
    name: "Reece Chung",
    avatar: "avatar-5.webp",
    datePosted: "02 Mar 2025 5:39 pm",
    rating: 1,
    comment:
      "Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est aliquid est voluptatem.",
    tags: ["Great sevice", "Recommended", "Best price"],
  },
];

// Newest Booking Data
export const newestBookings = [
  {
    id: 1,
    name: "Jayvion Simon",
    date: "10 Mar 2025 4:38 pm",
    days: 3,
    nights: 2,
    guests: "3-5",
    image: "/src/images/travel/travel-1.webp",
    avatar: "/src/images/avathar/avatar-1.webp",
    price: 83.74,
  },
  {
    id: 2,
    name: "Lucian Obrien",
    date: "09 Mar 2025 3:38 pm",
    days: 3,
    nights: 2,
    guests: "3-5",
    image: "/src/images/travel/travel-2.webp",
    avatar: "/src/images/avathar/avatar-2.webp",
    price: 97.14,
  },
  {
    id: 3,
    name: "Deja Brady",
    date: "08 Mar 2025 2:38 pm",
    days: 3,
    nights: 2,
    guests: "3-5",
    image: "/src/images/travel/travel-3.webp",
    avatar: "/src/images/avathar/avatar-3.webp",
    price: 68.71,
  },
  {
    id: 4,
    name: "Harrison Stein",
    date: "07 Mar 2025 1:38 pm",
    days: 3,
    nights: 2,
    guests: "3-5",
    image: "/src/images/travel/travel-4.webp",
    avatar: "/src/images/avathar/avatar-4.webp",
    price: 85.21,
  },
  {
    id: 5,
    name: "Reece Chung",
    date: "06 Mar 2025 12:38 pm",
    days: 3,
    nights: 2,
    guests: "3-5",
    image: "/src/images/travel/travel-5.webp",
    avatar: "/src/images/avathar/avatar-5.webp",
    price: 52.17,
  },
  {
    id: 6,
    name: "Lainey Davidson",
    date: "05 Mar 2025 11:38 am",
    days: 3,
    nights: 2,
    guests: "3-5",
    image: "/src/images/travel/travel-6.webp",
    avatar: "/src/images/avathar/avatar-6.webp",
    price: 25.18,
  },
  {
    id: 7,
    name: "Cristopher Cardenas",
    date: "04 Mar 2025 10:38 am",
    days: 3,
    nights: 2,
    guests: "3-5",
    image: "/src/images/travel/travel-1.webp",
    avatar: "/src/images/avathar/avatar-7.webp",
    price: 43.84,
  },
  {
    id: 8,
    name: "Melanie Noble",
    date: "03 Mar 2025 9:38 am",
    days: 3,
    nights: 2,
    guests: "3-5",
    image: "/src/images/travel/travel-2.webp",
    avatar: "/src/images/avathar/avatar-8.webp",
    price: 60.98,
  },
];

// Booking Details Data
export const bookingDetailsData = [
  {
    id: 1,
    destination: "Island Hopping Extravaganza",
    destinationImage: "/src/images/travel/travel-1.webp",
    customerName: "Jayvion Simon",
    customerPhone: "+1 202-555-0143",
    checkInDate: "12 Mar 2025",
    checkInTime: "9:40 am",
    checkOutDate: "12 Mar 2025",
    checkOutTime: "9:40 am",
    status: "Paid",
  },
  {
    id: 2,
    destination: "Cultural Wonders of Europe",
    destinationImage: "/src/images/travel/travel-2.webp",
    customerName: "Lucian Obrien",
    customerPhone: "+1 416-555-0198",
    checkInDate: "11 Mar 2025",
    checkInTime: "8:40 am",
    checkOutDate: "11 Mar 2025",
    checkOutTime: "8:40 am",
    status: "Paid",
  },
  {
    id: 3,
    destination: "Safari Expedition in Africa",
    destinationImage: "/src/images/travel/travel-3.webp",
    customerName: "Deja Brady",
    customerPhone: "+44 20 7946 0958",
    checkInDate: "10 Mar 2025",
    checkInTime: "7:40 am",
    checkOutDate: "10 Mar 2025",
    checkOutTime: "7:40 am",
    status: "Pending",
  },
  {
    id: 4,
    destination: "Grand Canyon Explorer",
    destinationImage: "/src/images/travel/travel-4.webp",
    customerName: "Harrison Stein",
    customerPhone: "+61 2 9876 5432",
    checkInDate: "09 Mar 2025",
    checkInTime: "6:40 am",
    checkOutDate: "09 Mar 2025",
    checkOutTime: "6:40 am",
    status: "Cancelled",
  },
  {
    id: 5,
    destination: "Historic Cities of Asia",
    destinationImage: "/src/images/travel/travel-5.webp",
    customerName: "Reece Chung",
    customerPhone: "+91 22 1234 5678",
    checkInDate: "08 Mar 2025",
    checkInTime: "5:40 am",
    checkOutDate: "08 Mar 2025",
    checkOutTime: "5:40 am",
    status: "Paid",
  },
];

// Add this to your existing dashboardData.js file

export const navigationItems = [
  {
    title: "App",
    icon: "bi-arrow-up-right",
    path: "/app",
    category: "OVERVIEW",
    hasChildren: false,
  },
  {
    title: "Ecommerce",
    icon: "bi-lock",
    path: "/ecommerce",
    category: "OVERVIEW",
    hasChildren: false,
  },
  {
    title: "Analytics",
    icon: "bi-bar-chart",
    path: "/analytics",
    category: "OVERVIEW",
    hasChildren: false,
  },
  {
    title: "Banking",
    icon: "bi-bank",
    path: "/banking",
    category: "OVERVIEW",
    hasChildren: false,
  },
  {
    title: "Booking",
    icon: "bi-calendar2-check",
    path: "/booking",
    category: "OVERVIEW",
    hasChildren: false,
  },
  {
    title: "File",
    icon: "bi-file-earmark",
    path: "/file",
    category: "OVERVIEW",
    hasChildren: false,
  },
  {
    title: "Course",
    icon: "bi-camera-video",
    path: "/course",
    category: "OVERVIEW",
    hasChildren: false,
  },
  {
    title: "User",
    icon: "bi-person",
    path: "/user",
    category: "MANAGEMENT",
    hasChildren: true,
  },
  {
    title: "Product",
    icon: "bi-cart",
    path: "/product",
    category: "MANAGEMENT",
    hasChildren: true,
  },
  {
    title: "Order",
    icon: "bi-receipt",
    path: "/order",
    category: "MANAGEMENT",
    hasChildren: true,
  },
  {
    title: "Invoice",
    icon: "bi-currency-dollar",
    path: "/invoice",
    category: "MANAGEMENT",
    hasChildren: true,
  },
  {
    title: "Blog",
    icon: "bi-card-list",
    path: "/blog",
    category: "MANAGEMENT",
    hasChildren: true,
  },
  {
    title: "Job",
    icon: "bi-briefcase",
    path: "/job",
    category: "MANAGEMENT",
    hasChildren: true,
  },
  {
    title: "Tour",
    icon: "bi-flag",
    path: "/tour",
    category: "MANAGEMENT",
    hasChildren: true,
  },
];

//
//
//

// Sidebar menu structure
export const sidebarMenuItems = [
  { section: "OVERVIEW", items: [] },
  {
    items: [
      { icon: dashboardIcon, label: "App" },
      { icon: ecommerceIcon, label: "Ecommerce" },
      { icon: analyticsIcon, label: "Analytics" },
      { icon: bankingIcon, label: "Banking" },
      { icon: bookingIcon, label: "Booking" },
      { icon: fileIcon, label: "File" },
      { icon: courseIcon, label: "Course" },
    ],
  },
  // { section: "MANAGEMENT", items: [] },
  // {
  //   items: [
  //     { icon: blankIcon, label: "User", hasChildren: true },
  //     { icon: blankIcon, label: "Product", hasChildren: true },
  //     { icon: blankIcon, label: "Order", hasChildren: true },
  //     { icon: blankIcon, label: "Invoice", hasChildren: true },
  //     { icon: blankIcon, label: "Blog", hasChildren: true },
  //     { icon: blankIcon, label: "Job", hasChildren: true },
  //     { icon: blankIcon, label: "Tour", hasChildren: true },
  //   ],
  // },
  // { section: "MISC", items: [] },
  // {
  //   items: [
  //     {
  //       icon: blankIcon,
  //       label: "Permission",
  //       subtitle: "Only admin can see this item",
  //     },
  //     { icon: blankIcon, label: "Level", hasChildren: true },
  //     { icon: blankIcon, label: "Disabled", disabled: true },
  //     { icon: blankIcon, label: "Label", badge: "NEW" },
  //     {
  //       icon: blankIcon,
  //       label: "Caption",
  //       subtitle: "Quisque malesuada placerat nisl. In...",
  //     },
  //     { icon: blankIcon, label: "Params" },
  //     { icon: blankIcon, label: "External link", isExternal: true },
  //     { icon: blankIcon, label: "Blank" },
  //   ],
  // },
];

// User data
export const userData = {
  name: "Jaydon Frankie",
  email: "demo@minimals.cc",
  status: "Free",
  avatar: "../src/images/avathar/avatar-25.webp",
};

// // Other dashboard data can be added here
// export const bookingStats = {
//   totalBookings: 18765,
//   growthPercentage: 2.6,
//   // Add more booking statistics as needed
// };

// Add any other data structures your dashboard needs here
