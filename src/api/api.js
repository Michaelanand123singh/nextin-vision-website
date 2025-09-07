// src/api/api.js
import axios from 'axios';

// Base URL from environment variable
const BASE_URL = import.meta.env.VITE_API_URL;

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token (if needed later)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

// =========================
// TESTIMONIALS API
// =========================
export const testimonialAPI = {
  // Get all testimonials
  getAll: async () => {
    try {
      const response = await api.get('/api/testimonials');
      return response.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }
  },

  // Get testimonial by ID
  getById: async (id) => {
    try {
      const response = await api.get(`/api/testimonials/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching testimonial:', error);
      throw error;
    }
  },

  // Create new testimonial (public)
  create: async (testimonialData) => {
    try {
      const response = await api.post('/api/testimonials', testimonialData);
      return response.data;
    } catch (error) {
      console.error('Error creating testimonial:', error);
      throw error;
    }
  }
};

// =========================
// SERVICES API
// =========================
export const serviceAPI = {
  // Get all services
  getAll: async () => {
    try {
      const response = await api.get('/api/services/services');
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  },

  // Get service by ID
  getById: async (id) => {
    try {
      const response = await api.get(`/api/services/services/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching service:', error);
      throw error;
    }
  },

  // Get all categories
  getCategories: async () => {
    try {
      const response = await api.get('/api/services/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
};

// =========================
// PORTFOLIO API
// =========================
export const portfolioAPI = {
  // Get all portfolio items
  getAll: async () => {
    try {
      const response = await api.get('/api/portfolio');
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      throw error;
    }
  },

  // Get portfolio by ID
  getById: async (id) => {
    try {
      const response = await api.get(`/api/portfolio/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio item:', error);
      throw error;
    }
  }
};

// =========================
// PROJECTS API
// =========================
export const projectAPI = {
  // Get all projects
  getAll: async () => {
    try {
      const response = await api.get('/api/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  // Get project by ID
  getById: async (id) => {
    try {
      const response = await api.get(`/api/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching project:', error);
      throw error;
    }
  }
};

// =========================
// TEAM API
// =========================
export const teamAPI = {
  // Get all team members
  getAll: async () => {
    try {
      const response = await api.get('/api/team');
      return response.data;
    } catch (error) {
      console.error('Error fetching team:', error);
      throw error;
    }
  },

  // Get team member by ID
  getById: async (id) => {
    try {
      const response = await api.get(`/api/team/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching team member:', error);
      throw error;
    }
  }
};

// =========================
// CAREERS API
// =========================
export const careerAPI = {
  // Get all career listings
  getAll: async () => {
    try {
      const response = await api.get('/api/careers');
      return response.data;
    } catch (error) {
      console.error('Error fetching careers:', error);
      throw error;
    }
  },

  // Get career by ID
  getById: async (id) => {
    try {
      const response = await api.get(`/api/careers/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching career:', error);
      throw error;
    }
  },

  // Apply for a job
  apply: async (applicationData) => {
    try {
      const response = await api.post('/api/careers/apply', applicationData);
      return response.data;
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error;
    }
  }
};

// =========================
// CONTACT API
// =========================
export const contactAPI = {
  // Submit contact form
  submit: async (contactData) => {
    try {
      const response = await api.post('/api/contacts', contactData);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },

  // Get all contacts (for admin)
  getAll: async () => {
    try {
      const response = await api.get('/api/contacts');
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
};

// =========================
// HEALTH CHECK
// =========================
export const healthAPI = {
  // Check server status
  check: async () => {
    try {
      const response = await api.get('/api/health');
      return response.data;
    } catch (error) {
      console.error('Error checking server health:', error);
      throw error;
    }
  }
};

// Export the axios instance for custom requests
export default api;