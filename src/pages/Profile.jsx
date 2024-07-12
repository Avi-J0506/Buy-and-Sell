import React from "react";
import profileImage from "../assets/profile.png";
import Card from "../components/Card";

const Profile = () => {
  const userName = "Abhinandan Jha";
  const joinDate = "Joined on January 1, 2021";
  const listingsCount = 5;
  const listings = new Array(4).fill(0);

  return (
      <div className="container mx-auto p-4 flex">
        {/* Left Section */}
        <div className="w-1/3 p-4 flex flex-col items-center bg-gray-200 shadow-md rounded-lg">
          <img
            src={profileImage}
            alt="User Image"
            className="w-32 h-32 rounded-full border-blue-500"
          />
          <h2 className="text-xl font-bold mt-4">{userName}</h2>
          <p className="text-gray-800">{joinDate}</p>
          <div className="flex items-center mt-4">
            <p className="text-gray-900 font-bold">{listingsCount} Listings</p>
            <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
              New
            </button>
          </div>
          <button className="bg-blue-500 text-white mt-4 p-4 rounded-md hover:bg-green-500">
            Edit Profile
          </button>
        </div>

        {/*Right Section*/}
        <div className="w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ml-2">
          {listings.map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
  );
};

export default Profile;
