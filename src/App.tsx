import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, MapPin, Navigation, Phone, Mail, Award, Compass, Star, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef} className="min-h-screen bg-luxury-black text-white selection:bg-gold selection:text-luxury-black">
      {/* Navigation */}
      <nav id="navbar" className="fixed top-0 w-full z-50 bg-luxury-black/30 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Compass className="text-gold w-8 h-8" />
            <span className="text-2xl font-serif tracking-widest uppercase gold-text">Anh Tuấn</span>
          </motion.div>
          <div className="hidden md:flex gap-10 items-center text-sm uppercase tracking-widest font-medium text-white/70">
            <a href="#about" className="hover:text-gold transition-colors">Về chúng tôi</a>
            <a href="#tours" className="hover:text-gold transition-colors">Hành trình</a>
            <a href="#gallery" className="hover:text-gold transition-colors">Bộ sưu tập</a>
            <a href="#contact" className="hover:text-gold transition-colors">Liên hệ</a>
            <button className="border border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-black transition-all">
              Đặt vé ngay
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-gold uppercase tracking-[0.5em] mb-4 text-sm font-medium">Khám phá vẻ đẹp bất tận</p>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
              Hương Vị Du Lịch <br />
              <span className="italic gold-text">Đẳng Cấp</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Trải nghiệm những hành trình tinh tế tại Hoàng Mai, Nghệ An và khắp dải đất hình chữ S cùng thương hiệu Anh Tuấn Travel.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-gold text-black px-10 py-4 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Khám phá ngay
              </button>
              <button className="border border-white/20 backdrop-blur-sm px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Xem video giới thiệu
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 luxury-gradient">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Tinh hoa Nghệ An</h2>
            <div className="w-20 h-1 bg-gold mb-8" />
            <p className="text-white/70 leading-relaxed mb-6">
              Tọa lạc tại vùng đất địa linh nhân kiệt Hoàng Mai, Nghệ An, Anh Tuấn Travel ra đời với sứ mệnh mang đến những kỳ nghỉ tuyệt mỹ nhất. Chúng tôi không chỉ bán tour, chúng tôi kiến tạo những ký ức vô giá.
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              Từ tiếng sóng vỗ rì rào tại bờ biển Quỳnh Phương đến những đỉnh núi mờ sương, mỗi hành trình đều được thiết kế riêng biệt để tôn vinh vẻ đẹp thiên nhiên và sự sang trọng bậc nhất.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-2">
                < Award className="text-gold w-10 h-10" />
                <span className="text-xs uppercase tracking-widest text-white/40">Uy tín</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                < Star className="text-gold w-10 h-10" />
                <span className="text-xs uppercase tracking-widest text-white/40">5 Sao</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                < Navigation className="text-gold w-10 h-10" />
                <span className="text-xs uppercase tracking-widest text-white/40">Độc bản</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden border border-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1000" 
                alt="Nature Scene" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-luxury-black p-8 border border-white/5 shadow-2xl hidden md:block">
              <p className="text-4xl font-serif gold-text mb-1">10+</p>
              <p className="text-xs uppercase tracking-widest text-white/50">Năm kinh nghiệm</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 italic">Những Hành Trình Tiêu Biểu</h2>
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs">Mỗi hành trình là một kiệt tác</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hoàng Mai - Bình Minh Quỳnh Phương",
                price: "2.500.000 VNĐ",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
                duration: "2 Ngày 1 Đêm"
              },
              {
                title: "Nghệ An Di Sản - Về Với Xứ Nghệ",
                price: "4.800.000 VNĐ",
                img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
                duration: "3 Ngày 2 Đêm"
              },
              {
                title: "Phan Thiết - Biển Xanh Vẫy Gọi",
                price: "7.200.000 VNĐ",
                img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=800",
                duration: "4 Ngày 3 Đêm"
              }
            ].map((tour, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-[500px] overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 transition-opacity duration-500" />
                <img 
                  src={tour.img} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <p className="text-gold text-xs uppercase tracking-widest mb-2">{tour.duration}</p>
                  <h3 className="text-2xl font-serif text-white mb-4 group-hover:gold-text transition-colors">{tour.title}</h3>
                  <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-4 border-t border-white/10">
                    <span className="text-white/80 text-sm">{tour.price}</span>
                    <button className="text-gold text-sm underline underline-offset-4 font-medium uppercase tracking-widest">Chi tiết</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-luxury-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-2">Lời tri ân từ khách hàng</h2>
            <div className="flex justify-center gap-1 text-gold">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Một trải nghiệm tuyệt vời chưa từng có. Từ khâu đón tiếp đến lịch trình tham quan đều chuẩn 5 sao.",
                author: "Nguyễn Văn Hùng",
                role: "Doanh nhân"
              },
              {
                text: "Anh Tuấn Travel đã giúp gia đình tôi có một kỳ nghỉ thật sự ý nghĩa tại biển Quỳnh. Rất chuyên nghiệp!",
                author: "Trần Thị Lan",
                role: "Khách hàng thân thiết"
              },
              {
                text: "Sự tinh tế trong từng chi tiết nhỏ là điều khiến tôi ấn tượng nhất với thương hiệu này.",
                author: "Lê Minh Anh",
                role: "Nhiếp ảnh gia"
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 border border-white/5 bg-white/5 rounded-2xl relative"
              >
                <div className="absolute top-4 right-8 text-gold/10 font-serif text-6xl">"</div>
                <p className="text-white/60 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-bold">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{review.author}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/30">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 luxury-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl font-serif mb-8">Liên hệ tư vấn</h2>
                <p className="text-white/50 mb-10 leading-relaxed">
                  Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe và thiết kế những hành trình phù hợp nhất với đẳng cấp của bạn.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                      <MapPin className="text-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Địa chỉ</p>
                      <p className="text-sm">Hoàng Mai, Nghệ An, Việt Nam</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                      <Phone className="text-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Điện thoại</p>
                      <p className="text-sm">+84 (0) 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                      <Mail className="text-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-sm">anhtuan.travel@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Tên của bạn" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email liên hệ" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <textarea 
                  rows={4} 
                  placeholder="Yêu cầu của bạn" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
                <button className="w-full bg-gold text-black py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg hover:shadow-gold/20 transition-all">
                  Gửi lời nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Compass className="text-gold w-6 h-6" />
            <span className="text-xl font-serif tracking-widest uppercase gold-text">Anh Tuấn Travel</span>
          </div>
          <p className="text-white/30 text-xs mb-8 uppercase tracking-[0.2em]">
            Hoàng Mai, Nghệ An, Việt Nam &copy; {new Date().getFullYear()}
          </p>
          <div className="flex justify-center gap-6 text-white/40">
            <Camera size={20} className="hover:text-gold cursor-pointer" />
            <Navigation size={20} className="hover:text-gold cursor-pointer" />
            <Phone size={20} className="hover:text-gold cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
