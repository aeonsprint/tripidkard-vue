import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export function useMerchantProfile() {
  const userData = ref({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    contact: "",
    discount: "",
    description: "",
    business_name: "",
    street: "",
    city: "",
    province: "",
    zip: "",
    currentPassword: "",
    password_confirmation: "",
    password: "",
    logo: "",
    photo1: null, photo2: null, photo3: null
  });

  const updateProfile = async () => {
    try {
      const response = await axios.put("/api/user/update-profile", userData.value);
      Swal.fire("Success!", response.data.message || "Profile updated successfully.", "success");
    } catch (error) {
      Swal.fire("Error!", error.response?.data?.message || "Something went wrong.", "error");
    }
  };

  return { userData, updateProfile };
}
