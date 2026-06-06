import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import Placements from "@/pages/Placements";
import Gallery from "@/pages/Gallery";
import SuccessStories from "@/pages/SuccessStories";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import Contact from "@/pages/Contact";
import TermsAndConditions from "@/pages/TermsAndConditions";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  );
}
