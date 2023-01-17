import { combineReducers } from "redux";
import BookingReducer from "./BookingReducer";
import BuildingReducer from "./BuildingReducer";
import OfficeReducer from "./OfficeReducer";
import RoomReducer from "./RoomReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  rooms: RoomReducer,
  buildings: BuildingReducer,
  users: UserReducer,
  offices: OfficeReducer,
  bookings: BookingReducer,
});

export default RootReducer;
