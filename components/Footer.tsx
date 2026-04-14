import { content } from "@/content";
const { footer, brand } = content;

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#FAF8F5] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <p className="font-semibold text-lg mb-2">{brand.name}</p>
            <p className="text-[#6B6B6B] text-sm max-w-xs">{brand.tagline}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-sm text-[#A0A0A0]">
            <div className="flex flex-col gap-3">
              <p className="text-[#FAF8F5] font-medium text-xs tracking-widest uppercase">Shop</p>
              <a href="#product" className="hover:text-[#FAF8F5] transition-colors">Golf Gadget</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#FAF8F5] font-medium text-xs tracking-widest uppercase">Company</p>
              <a href="#" className="hover:text-[#FAF8F5] transition-colors">About</a>
              <a href="#" className="hover:text-[#FAF8F5] transition-colors">Contact</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#FAF8F5] font-medium text-xs tracking-widest uppercase">Follow</p>
              <a href={footer.instagramUrl} className="hover:text-[#FAF8F5] transition-colors">Instagram</a>
              <a href={footer.tiktokUrl} className="hover:text-[#FAF8F5] transition-colors">TikTok</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#6B6B6B] text-sm">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FAF8F5] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF8F5] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
