"use server";

const buyNow = async (
  prevState: {
    user: string | null;
    error: string | null;
  },
  formData: FormData
) => {
  try {
    const user = formData.get("user") as string;
    return { user, error: null };
  } catch (err: any) {
    return { user: null, error: err?.message || "Something Went Wrong!!" };
  }
};
export { buyNow };
