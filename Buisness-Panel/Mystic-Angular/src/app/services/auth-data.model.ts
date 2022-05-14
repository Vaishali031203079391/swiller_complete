export interface AuthData {
  restaurant_id?:string,
  restaurant_name?: string,
  restaurant_address?: string,
  restaurant_city?: string,
  address?: string,
  restaurant_location?: any;
  restaurant_phone?: string,
  landline_phone?: string,
  owner_phone?: string,
  owner_name?: string,
  restaurant_email?: string,
  establishment_type?: string[],
  cuisines?: string[],
  operational_hours?: string,
  operational_days?: string[],
  avatar?: any,
  gallery_images?: any,
  buisness_verified?: boolean,
  password?: string,
  userUpdatedPassword?: boolean
}
