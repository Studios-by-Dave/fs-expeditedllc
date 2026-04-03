import { lazy } from 'react';

// Lazy load components for better performance
export const LazyHero = lazy(() => import('@/components/Hero'));
export const LazyServices = lazy(() => import('@/components/Services'));
export const LazyWhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
export const LazyServiceArea = lazy(() => import('@/components/ServiceArea'));
export const LazyProcess = lazy(() => import('@/components/Process'));
export const LazyTestimonials = lazy(() => import('@/components/Testimonials'));
export const LazyContact = lazy(() => import('@/components/Contact'));
export const LazyFooter = lazy(() => import('@/components/Footer'));
