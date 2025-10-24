import { useState, useEffect } from "react";
import axios from "axios";

interface Category {
  _id: string;
  name: string;
  emoji: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface CategoriesResponse {
  message: string;
  status: string;
  statusCode: number;
  success: boolean;
  data: {
    categories: Category[];
    paginate: {
      currentPage: number;
      hashNextPage: boolean;
      hashPreviousPage: boolean;
      totalDoc: number;
      totalPage: number;
    };
    statusCode: number;
  };
}

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiBaseUrl = 'https://api.dev.getcrowned.fun';
      if (!apiBaseUrl) {
        throw new Error("API base URL not configured");
      }

      const response = await axios.get<CategoriesResponse>(
        `${apiBaseUrl}/api/category/all`
      );

      if (response.data.success && response.data.data.categories) {
        setCategories(response.data.data.categories);
      } else {
        throw new Error(response.data.message || "Failed to fetch categories");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        const errorMessage = err.message || "Failed to fetch categories";
        setError(errorMessage);
        console.error("Error fetching categories:", err);
      } else {
        console.error("Unknown error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories,
  };
};
