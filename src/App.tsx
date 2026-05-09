/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Factory, 
  CheckCircle, 
  ArrowRight, 
  Settings, 
  Gauge, 
  ShieldCheck, 
  Banknote, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Manufacturing", href: "#manufacturing" },
  ];

  return (
    <div className="bg-background text-on-surface font-inter min-h-screen selection:bg-secondary-fixed selection:text-on-secondary-container">
      {/* Header */}
      <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant shadow-sm w-full px-5 md:px-16 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Factory className="text-primary w-8 h-8" />
          <span className="font-hanken text-2xl font-bold text-primary tracking-tight">NTKH</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-secondary transition-colors font-geist text-xs font-semibold uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-secondary text-on-secondary px-6 py-2 rounded-lg font-geist text-xs font-semibold hover:bg-on-secondary-container transition-all active:scale-[0.98]">
            GET A QUOTE
          </button>
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-outline-variant p-5 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-on-surface-variant font-geist text-xs font-semibold uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-geist text-xs font-semibold">
              GET A QUOTE
            </button>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover brightness-[0.4]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfrp35Y9mYYjhJe1NsKqC3kiwGIMYS59XzNOoQvDGdol5a_fbOKUUIRdAC7GSWd25rm8hVIWuEYTdcZqh5RmV0PAAeR_cVykoWcX_i5t4uaVZutPGJjDrcGTadASTMONWwF70XX13079Cm5PY4OQCZX9l-QFH56FcCnUEfpuhJyNYv5XAp55TUpmnLQdvZoHug4vZmnFyht-OoUtp9EAgyKSCJouGPRzQaplD6d0BO_hQP_wPYqu-0rScPtl04CHDMefIU3Au8QmM"
              alt="Industrial Textile Factory"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full px-5 md:px-16 text-center md:text-left max-w-7xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-geist text-xs font-semibold text-secondary-fixed bg-secondary/20 px-3 py-1 rounded-full border border-secondary/30 mb-4 inline-block"
            >
              PRECISION TEXTILES
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-hanken text-4xl md:text-6xl text-white mb-6 leading-tight max-w-4xl font-bold"
            >
              Chuyên Gia Dệt Nhuộm Vải Thun Chất Lượng Cao
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg max-w-2xl mb-8"
            >
              Đẳng cấp trong từng sợi vải. NTKH kết hợp công nghệ nhuộm hiện đại cùng quy trình kiểm soát khắt khe để mang đến vải thun dệt kim chất lượng tốt nhất.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row gap-4 items-center"
            >
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold w-full md:w-auto shadow-lg hover:shadow-secondary/20 transition-all">
                Liên Hệ Báo Giá
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold w-full md:w-auto hover:bg-white/10 transition-all">
                Tìm Hiểu Thêm
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-5 md:px-16 bg-surface relative overflow-hidden" id="about">
          <div className="grain-texture absolute inset-0"></div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="font-geist text-xs font-semibold text-secondary tracking-widest mb-4">VỀ NTKH</h2>
              <h3 className="font-hanken text-3xl md:text-4xl text-primary font-bold mb-6">Kỹ Thuật Nhuộm & Dệt Vải Bền Vững</h3>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>Với hơn 15 năm kinh nghiệm trong ngành dệt may, NTKH tự hào là đối tác chiến lược cho các thương hiệu may mặc hàng đầu. Chúng tôi không chỉ cung cấp vải, chúng tôi cung cấp sự an tâm.</p>
                <p>Hệ thống máy dệt kim hiện đại cùng quy trình nhuộm không độc hại giúp tối ưu hóa độ đàn hồi của spandex, đảm bảo màu sắc đồng nhất và độ bền màu vượt trội qua nhiều lần giặt.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-10">
                <div className="border-l-4 border-secondary pl-6">
                  <p className="font-hanken text-3xl font-bold text-primary">500+</p>
                  <p className="font-geist text-xs font-semibold text-on-surface-variant uppercase">KHÁCH HÀNG</p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <p className="font-hanken text-3xl font-bold text-primary">100%</p>
                  <p className="font-geist text-xs font-semibold text-on-surface-variant uppercase">TỰ ĐỘNG HÓA</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsLzbuFBzY1oAm6Bj43ABbk93BKHd3StfHuwpPQy6cRmfZlNkMe--kA5Ckx2Tnw6oKeAStrwSkzzKtQrjzTpQnFnwdysIGiQt3lGpiLgw456V3IXpGKwgj4zh96o7tOZrPSxSF6mO2CdRhyNS27zFGJC4AGVQ_-853N40E358W1h0xGKxTAGi3ePJO1qf9dif8DYlKuMYgAMUA5Suu38wJAnWbdh_vxkf2aJ2HphHP2JptoSmCmx4EO0NFnplcOVONXXLYVPV3MVk" 
                  alt="High Quality Fabrics"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-6 rounded-xl text-white shadow-xl hidden md:block">
                <CheckCircle className="text-secondary-fixed mb-2 w-10 h-10" />
                <p className="font-geist text-xs font-semibold mb-1 uppercase">TIÊU CHUẨN QUỐC TẾ</p>
                <p className="text-sm opacity-80">Chứng nhận ISO 9001:2015</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-5 md:px-16 bg-surface-container-low" id="products">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="font-geist text-xs font-semibold text-secondary tracking-widest mb-4">BỘ SƯU TẬP VẢI</h2>
                <h3 className="font-hanken text-3xl md:text-4xl text-primary font-bold">Danh Mục Sản Phẩm Chủ Lực</h3>
              </div>
              <button className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Xem tất cả sản phẩm <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Vải Thun Cotton",
                  desc: "100% Cotton, mềm mại, thấm hút mồ hôi tuyệt đối.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMuO4PwLSf5CoulrAxDLXlcx4loSRAe3LpCV-_bWhhuJLLdJF5GxXlxof-3yoTVOt6nZsZ0Mi__kpsiG3OdyOKoVX0exlCIWqojVfqSLlZV8VBW5hqvYPQcQ9VblhW5jjPER8wWEoYJc-vhbpp-53KZ2w0KZb8WIEOgmx53tXqSif5ELSCe6jLk5stRAKg2K-y7K24NfK63Mgsa2_DvgOttA_Cm8PR92kzHdJ7GEPvNWlH0vKok6lbW954VInk8TmG2yaoheYGF2g",
                  colors: ["bg-primary", "bg-secondary", "bg-surface-variant"],
                  count: "+24 Màu",
                  hot: true
                },
                {
                  title: "Vải CVC",
                  desc: "65% Cotton, 35% Poly. Bền màu, ít nhăn, đứng form.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7_KLtq3Q-q88Vm4hhTtpikaPdCCGUoelgrRkjF7VqqTNYDszTVjVRmoGRtpwjTytlRV1x_GmZtvgVmV_irQfGAEvYXj-ncGumYcKbwUktS4d_CF_EQdhB2d1Gc8Vg1fqr3mmsaMc6sF2IkHo6-6Cgoblwnd1Nl1aLcRH2GZOykIY1LEFy3m8sSslP5lVn-Z_pH2HVsCVHIorB_A9XHYVQ4zl31isAjCgD65T32KkJCLW9vV5XLteS2moWyh3OYL90Be2e1Rvy6S4",
                  colors: ["bg-[#1a365d]", "bg-[#2d3748]", "bg-[#4a5568]"],
                  count: "+12 Màu"
                },
                {
                  title: "Vải Tixi",
                  desc: "35% Cotton, 65% Poly. Kinh tế, đa dụng cho may mặc.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTFQ7N5rbxKgVZQ-0Om-eFXT7qtwTZCfrJgqGxE1cKxeovcySVQmd8ZSKgA-_h0VM1UzOG8o_t5nJ_NRGDgI7qZnjiv2BM-SAwR9HXYvtYlOFPRh3lReZMP8Tr9jlH1C5yiF7ktJVBWO3pjENHUdnuTaSk2t9V-gMSW32cLBBw_rAFCHAttXKPIMQKRCtQm4Za2sZi0dV6BhWaH249EfPK_5gYXXGtM054E2tHzkoCc8qFXAcmf5tfMqnPLrsQuaqyklNLmGjvXck",
                  colors: ["bg-[#cbd5e0]", "bg-[#a0aec0]", "bg-[#718096]"],
                  count: "+30 Màu"
                },
                {
                  title: "Vải Poly",
                  desc: "100% Polyester. Chống nhăn, nhanh khô, độ bền cao.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_pYQ4TFUrIKwhuTDlsizjFsXKvHpM_9mxltVliMEz2Sjzn_4YvkQv8Lgi8vbMavVmYuv_fr8JNI5p_KY5D7-3E6H_dbcnPJNP7SYRm1o_X1_Vu55N_D5diNy2ZPEUZbxfabthBiaXcj3GXAFSkm_UXQi97AMf8Dlj2jc8GXwUME2eBxGgUv-LUDMP1Own2jvZUCxu65oVwKmEDtg4Jz-RTleyqfG9mjBbqQfpAqzXBdBb4WO_LJYQQQrygHtUSwle5JvzPGjouX0",
                  colors: ["bg-[#2b6cb0]", "bg-[#2c5282]", "bg-[#2a4365]"],
                  count: "+18 Màu"
                }
              ].map((product, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white p-1 rounded-xl group cursor-pointer border border-outline-variant hover:border-secondary transition-all"
                >
                  <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 relative">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={product.img} alt={product.title} />
                    {product.hot && <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur text-white px-3 py-1 rounded font-geist text-xs font-semibold">HOT</div>}
                  </div>
                  <div className="p-4">
                    <h4 className="font-hanken text-xl font-bold text-primary mb-1">{product.title}</h4>
                    <p className="text-on-surface-variant text-sm mb-4">{product.desc}</p>
                    <div className="flex gap-2 items-center">
                      {product.colors.map((color, cIdx) => (
                        <div key={cIdx} className={`w-6 h-6 rounded-full ${color} border border-outline`}></div>
                      ))}
                      <span className="text-xs text-on-surface-variant font-geist ml-auto">{product.count}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Section */}
        <section className="py-20 px-5 md:px-16 bg-primary text-white overflow-hidden relative" id="manufacturing">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2">
              <h2 className="font-geist text-xs font-semibold text-secondary-fixed tracking-widest mb-4">NĂNG LỰC SẢN XUẤT</h2>
              <h3 className="font-hanken text-3xl md:text-4xl font-bold mb-6">Công Nghệ Hiện Đại, Độ Chính Xác Tuyệt Đối</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Hệ thống dây chuyền nhuộm liên tục cùng máy kiểm vải tự động đảm bảo mọi mét vải xuất xưởng đều đạt chuẩn quốc tế. Chúng tôi áp dụng quy trình ERP trong quản lý sản xuất để tối ưu hóa thời gian và chi phí cho đối tác.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Settings className="text-secondary-fixed w-6 h-6" />
                  <div>
                    <h4 className="font-geist text-xs font-semibold text-secondary-fixed uppercase">MÁY NHUỘM CAO ÁP</h4>
                    <p className="text-sm opacity-80">Đảm bảo màu ngấm sâu, không phai và đều màu tuyệt đối.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Gauge className="text-secondary-fixed w-6 h-6" />
                  <div>
                    <h4 className="font-geist text-xs font-semibold text-secondary-fixed uppercase">QUY TRÌNH SIÊU TỐC</h4>
                    <p className="text-sm opacity-80">Đáp ứng đơn hàng số lượng lớn trong thời gian ngắn nhất.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  className="w-full aspect-video object-cover" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uguxKVoIw643VGJ9EDjZD_rxWQ3Jysa8wE_RX_pbuC7K3C5rny_rizHoLCkKxXK6pmZbcMl2bTFsQU7NL1uQyt7wl4dXrLCTs0fLmVTUtflV62LojKvn6FXNUBrGvzKBCdI5js9zXxgcYrQNRcfJOCf79AlEn3fK2NIwth8xCuRyoa8Sio1ousI1hqNd14_oBhGcm8PYhzmUemI_p2RIaAlwCTkMCItIrpN7J--SN4PCVypvBYSZcCbATO6ngW4nIOrPBXxtPB0" 
                  alt="Manufacturing Process"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 px-5 md:px-16 bg-surface">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="font-hanken text-3xl font-bold text-primary">Cam Kết Chất Lượng</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              { icon: <ShieldCheck />, title: "Chất Lượng Cao", desc: "Kiểm soát 4 điểm khắt khe, cam kết không lỗi trên từng mét vải." },
              { icon: <Banknote />, title: "Giá Cạnh Tranh", desc: "Quy trình tối ưu giúp mang lại mức giá tốt nhất thị trường sỉ." },
              { icon: <Clock />, title: "Giao Hàng Đúng Hẹn", desc: "Hệ thống logistic chuyên nghiệp, đảm bảo tiến độ sản xuất của bạn." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-xl border border-slate-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  {item.icon}
                </div>
                <h4 className="font-hanken text-xl font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-on-surface-variant text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-5 md:px-16 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="font-hanken text-3xl font-bold text-primary mb-6">Liên Hệ Với Chúng Tôi</h3>
              <p className="text-on-surface-variant mb-10">Gửi yêu cầu của bạn để nhận mẫu vải và báo giá chi tiết trong vòng 24h.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input className="bg-surface border-slate-200 focus:ring-secondary focus:border-secondary rounded-lg p-4 w-full" placeholder="Họ và tên" type="text" />
                  <input className="bg-surface border-slate-200 focus:ring-secondary focus:border-secondary rounded-lg p-4 w-full" placeholder="Số điện thoại" type="tel" />
                </div>
                <input className="bg-surface border-slate-200 focus:ring-secondary focus:border-secondary rounded-lg p-4 w-full" placeholder="Email liên hệ" type="email" />
                <textarea className="bg-surface border-slate-200 focus:ring-secondary focus:border-secondary rounded-lg p-4 w-full" placeholder="Nội dung yêu cầu (Loại vải, Số lượng...)" rows={4}></textarea>
                <button className="bg-primary text-white w-full py-4 rounded-lg font-geist text-xs font-semibold uppercase tracking-widest hover:bg-on-primary-container transition-all" type="submit">GỬI YÊU CẦU NGAY</button>
              </form>
            </div>
            <div className="bg-surface rounded-xl p-10 border border-outline-variant flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <MapPin className="text-secondary w-8 h-8" />
                  <div>
                    <p className="font-geist text-xs font-semibold text-on-surface-variant uppercase mb-1">VĂN PHÒNG & XƯỞNG</p>
                    <p className="text-primary font-bold">KCN Lê Minh Xuân, Bình Chánh, TPHCM</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Phone className="text-secondary w-8 h-8" />
                  <div>
                    <p className="font-geist text-xs font-semibold text-on-surface-variant uppercase mb-1">HOTLINE KINH DOANH</p>
                    <p className="text-primary font-bold">0909.339.101</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Mail className="text-secondary w-8 h-8" />
                  <div>
                    <p className="font-geist text-xs font-semibold text-on-surface-variant uppercase mb-1">EMAIL HỖ TRỢ</p>
                    <p className="text-primary font-bold">detnhuom.ntkh@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-on-primary px-5 md:px-16 py-20 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Factory className="text-secondary-fixed w-8 h-8" />
                <span className="font-hanken text-2xl font-bold text-inverse-primary tracking-tight">NTKH</span>
              </div>
              <p className="text-surface-variant opacity-80 max-w-sm">
                Giải pháp toàn diện về dệt nhuộm vải thun. Chúng tôi đồng hành cùng sự thành công của thương hiệu bạn thông qua chất lượng vải vượt trội.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <p className="font-geist text-xs font-semibold text-secondary-fixed-dim uppercase mb-2">THÔNG TIN</p>
                {["Sustainability", "Technical Specs", "Privacy Policy", "Careers"].map(item => (
                  <a key={item} className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-colors text-sm" href="#">{item}</a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-geist text-xs font-semibold text-secondary-fixed-dim uppercase mb-2">DỊCH VỤ</p>
                {["Dệt Kim Tròn", "Nhuộm & Hoàn Tất", "Phát Triển Mẫu", "Kiểm Định Sợi"].map(item => (
                  <p key={item} className="text-surface-variant opacity-80 text-sm">{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60">
            <p>© 2024 NTKH Textile Dyeing & Knitting. All Rights Reserved.</p>
            <div className="flex items-center gap-3">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcs1ATPiwsu1yobe8k8QvCLU4B_g9G3MbK_P0pt_kw76FWvKn7MJCneEkfUSB4eYXRfxggNFW0sF6E4YKzPpbbbfw7SYL5EESVl011f_V9yO50dsTcFU1daGXQo4Hak0VDXYy7HwcmOM2A8dRCBHsV9C_KQvqF7X20tOsdht-fWghj32i1Pe_F2nz-90JSXOC_JrNmpkwR3-turVnizMiOeE-gsxZNuCMe0Y4KqptaiLvscVvXjVioJEauHm7cpwlfcLtUPL9NGmk" alt="VN" className="w-6" />
              <span>Made in Vietnam</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
