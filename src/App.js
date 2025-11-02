import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    'intro',
    'theory',
    'case-study',
    'vietnam-context',
    'impacts', 
    'solutions',
    'quiz',
    'thank-you'
  ];

  const navigateSection = (direction) => {
    setCurrentSection(prev => {
      if (direction === 'next' && prev < sections.length - 1) return prev + 1;
      if (direction === 'prev' && prev > 0) return prev - 1;
      return prev;
    });
  };

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      <nav className="navigation">
        <div className="nav-dots">
          {sections.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${currentSection === index ? 'active' : ''}`}
              onClick={() => setCurrentSection(index)}
            />
          ))}
        </div>
      </nav>

      <main className="main-content">
        {currentSection === 0 && <IntroSection />}
        {currentSection === 1 && <TheorySection />}
        {currentSection === 2 && <CaseStudySection />}
        {currentSection === 3 && <VietnamContextSection />}
        {currentSection === 4 && <ImpactsSection />}
        {currentSection === 5 && <SolutionsSection />}
        {currentSection === 6 && <QuizSection />}
        {currentSection === 7 && <ThankYouSection />}
      </main>

      <div className="section-controls">
        <button 
          className="nav-btn prev" 
          onClick={() => navigateSection('prev')}
          disabled={currentSection === 0}
        >
          ← Trước
        </button>
        <button 
          className="nav-btn next" 
          onClick={() => navigateSection('next')}
          disabled={currentSection === sections.length - 1}
        >
          Tiếp → 
        </button>
      </div>
    </div>
  );
}

// Section Components
const IntroSection = () => (
  <section className="section intro-section">
    <div className="hero-content">
      <h1 className="main-title">
        Độc Quyền Thời Đại 4.0
      </h1>
      <h2 className="subtitle">
        Biểu hiện mới của độc quyền trong điều kiện cách mạng công nghiệp 4.0
      </h2>
      <div className="intro-grid">
        <div className="intro-card">
          <div className="icon">🏭</div>
          <h3>Độc quyền truyền thống</h3>
          <p>Kiểm soát giá cả, chiếm lĩnh thị trường, sở hữu tài nguyên</p>
        </div>
        <div className="intro-card highlight">
          <div className="icon">🌐</div>
          <h3>Độc quyền số</h3>
          <p>Dữ liệu lớn, AI, nền tảng số, sở hữu trí tuệ</p>
        </div>
        <div className="intro-card">
          <div className="icon">⚡</div>
          <h3>Tác động sâu rộng</h3>
          <p>Thiết lập "luật chơi", kiểm soát hành vi tiêu dùng</p>
        </div>
      </div>
    </div>
  </section>
);

const TheorySection = () => {
  const [selectedTheory, setSelectedTheory] = useState(0);
  
  const theories = [
    {
      title: "Lý thuyết độc quyền của Lenin",
      content: "Độc quyền là giai đoạn cao nhất của chủ nghĩa tư bản, đặc trưng bởi sự tập trung sản xuất và tư bản.³⁶",
      modern: "Ngày nay thể hiện qua việc tập trung dữ liệu và công nghệ trong tay một số ít tập đoàn công nghệ.³⁷"
    },
    {
      title: "Giá trị thặng dư của Marx", 
      content: "Lợi nhuận siêu ngạch được tạo ra từ việc chiếm đoạt lao động không được trả công.³⁸",
      modern: "Thu thập dữ liệu cá nhân miễn phí từ người dùng để tạo ra lợi nhuận khổng lồ từ quảng cáo.³⁹"
    },
    {
      title: "Tư bản tài chính",
      content: "Sự kết hợp giữa tư bản ngân hàng và tư bản công nghiệp theo Lenin.⁴⁰",
      modern: "Kết hợp giữa công nghệ và tài chính (Fintech), nền tảng thanh toán số như PayPal, Stripe.⁴¹"
    }
  ];

  return (
    <section className="section theory-section">
      <h2>Cơ sở lý thuyết: Kinh tế chính trị Mác-Lênin</h2>
      
      <div className="theory-container">
        <div className="theory-tabs">
          {theories.map((theory, index) => (
            <button
              key={index}
              className={`theory-tab ${selectedTheory === index ? 'active' : ''}`}
              onClick={() => setSelectedTheory(index)}
            >
              {theory.title}
            </button>
          ))}
        </div>
        
        <div className="theory-content">
          <div className="theory-card">
            <h3>Lý thuyết cổ điển</h3>
            <p>{theories[selectedTheory].content}</p>
          </div>
          <div className="arrow">➜</div>
          <div className="theory-card modern">
            <h3>Ứng dụng hiện đại</h3>
            <p>{theories[selectedTheory].modern}</p>
          </div>
        </div>
      </div>

      <div className="new-forms">
        <h3>Biểu hiện mới của độc quyền:</h3>
        <div className="forms-grid">
          <div className="form-item">
            <span className="form-icon">📊</span>
            <span>Độc quyền dữ liệu</span>
          </div>
          <div className="form-item">
            <span className="form-icon">🔧</span>
            <span>Độc quyền nền tảng</span>
          </div>
          <div className="form-item">
            <span className="form-icon">🧠</span>
            <span>Độc quyền thuật toán</span>
          </div>
          <div className="form-item">
            <span className="form-icon">🔬</span>
            <span>Độc quyền sở hữu trí tuệ</span>
          </div>
        </div>
      </div>

      <div className="theory-sources">
        <h4>📚 Nguồn lý thuyết:</h4>
        <div className="sources-list">
          <p>[36] <a href="https://www.marxists.org/archive/lenin/works/1916/imp-hsc/" target="_blank" rel="noopener noreferrer">Lenin, V.I. "Chủ nghĩa đế quốc - giai đoạn cao nhất của chủ nghĩa tư bản" (1916)</a></p>
          <p>[37] <a href="https://fuchs.uti.at/wp-content/uploads/DigitalLabor.pdf" target="_blank" rel="noopener noreferrer">Fuchs, Christian. "Digital Labor and Karl Marx" (2014)</a></p>
          <p>[38] <a href="https://www.marxists.org/archive/marx/works/1867-c1/" target="_blank" rel="noopener noreferrer">Marx, Karl. "Tư bản" Tập I, Chương 7-10 về giá trị thặng dư</a></p>
          <p>[39] <a href="https://shoshanazuboff.com/book/about/" target="_blank" rel="noopener noreferrer">Zuboff, Shoshana. "The Age of Surveillance Capitalism" (2019)</a></p>
          <p>[40] <a href="https://www.marxists.org/archive/lenin/works/1916/imp-hsc/ch03.htm" target="_blank" rel="noopener noreferrer">Lenin, V.I. "Chủ nghĩa đế quốc" Chương 3 về tư bản tài chính</a></p>
          <p>[41] <a href="https://www.tandfonline.com/doi/full/10.1080/09692290.2023.2165290" target="_blank" rel="noopener noreferrer">Langley, Paul. "Digital Financial Capital" (2023)</a></p>
        </div>
      </div>
    </section>
  );
};

const CaseStudySection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="section case-study-section">
      <h2>Trường hợp cụ thể: Google/Alphabet Inc.</h2>
      
      <div className="case-study-header">
        <div className="company-info">
          <div className="company-logo">G</div>
          <div className="company-stats">
            <h3>Alphabet Inc. (Google)</h3>
            <p><strong>Vốn hóa thị trường:</strong> $1.7 nghìn tỷ USD (2024)<sup>[1]</sup></p>
            <p><strong>Thị phần tìm kiếm:</strong> {'>'} 90% toàn cầu<sup>[2]</sup></p>
            <p><strong>YouTube:</strong> {'>'} 2 tỷ người dùng hoạt động<sup>[3]</sup></p>
            <p><strong>Doanh thu quảng cáo:</strong> $307 tỷ USD (2023)<sup>[4]</sup></p>
          </div>
        </div>
      </div>

      <div className="case-tabs">
        <button 
          className={`case-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Cách Google độc quyền
        </button>
        <button 
          className={`case-tab ${activeTab === 'foundation' ? 'active' : ''}`}
          onClick={() => setActiveTab('foundation')}
        >
          Nguồn sức mạnh
        </button>
        <button 
          className={`case-tab ${activeTab === 'evidence' ? 'active' : ''}`}
          onClick={() => setActiveTab('evidence')}
        >
          Bằng chứng cụ thể
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="monopoly-forms">
          <div className="monopoly-item">
            <h4>🔍 Độc quyền tìm kiếm - Cách hoạt động:</h4>
            <p><strong>Thực tế:</strong> Khi bạn tìm kiếm "mua laptop", Google quyết định bạn thấy quảng cáo nào đầu tiên.</p>
            <p><strong>Cơ chế:</strong> Thuật toán PageRank và machine learning phân tích 8.5 tỷ tìm kiếm/ngày để tối ưu lợi nhuận quảng cáo.</p>
            <p><strong>Hậu quả:</strong> 95% doanh thu từ quảng cáo - người dùng trở thành "sản phẩm" được bán cho nhà quảng cáo.</p>
          </div>
          
          <div className="monopoly-item">
            <h4>📱 Hệ sinh thái khép kín - Ví dụ cụ thể:</h4>
            <p><strong>Kịch bản:</strong> Bạn dùng điện thoại Android → tự động có Gmail → lưu ảnh Google Photos → xem YouTube → dùng Google Maps</p>
            <p><strong>Kết quả:</strong> Google biết bạn ở đâu, mua gì, thích gì, gặp ai - từ 6h sáng đến 24h đêm.</p>
            <p><strong>Lock-in effect:</strong> Thử chuyển sang iPhone và mất hết dữ liệu 10 năm qua - hầu như không thể!</p>
          </div>
          
          <div className="monopoly-item">
            <h4>📊 Độc quyền dữ liệu - Số liệu thực tế:</h4>
            <p><strong>Thu thập:</strong> 15 exabyte dữ liệu mỗi ngày (= 15 triệu TB) từ 4 tỷ người dùng toàn cầu.</p>
            <p><strong>Phân tích:</strong> AI biết bạn sẽ mua gì trước khi bạn biết - độ chính xác {'>'} 80%.</p>
            <p><strong>Thương mại hóa:</strong> Bán thông tin này cho 2 triệu nhà quảng cáo với giá trung bình $53/người/năm.</p>
          </div>
          
          <div className="monopoly-item">
            <h4>💰 Độc quyền quảng cáo - Chi tiết hoạt động:</h4>
            <p><strong>Thị phần:</strong> Google Ads + YouTube = 28.6% thị trường quảng cáo số toàn cầu (2024).</p>
            <p><strong>Cơ chế đấu giá:</strong> Doanh nghiệp phải trả giá ngày càng cao để xuất hiện trước đối thủ.</p>
            <p><strong>Kiểm soát giá:</strong> Chi phí quảng cáo tăng 15% mỗi năm dù hiệu quả giảm - doanh nghiệp không có lựa chọn khác.</p>
          </div>
        </div>
      )}

      {activeTab === 'foundation' && (
        <div className="foundation-detailed">
          <h3>🏗️ Nền tảng sức mạnh của Google:</h3>
          <div className="foundation-pyramid">
            <div className="pyramid-level level-1">
              <div className="level-content">
                <strong>1. Thuật toán AI siêu việt</strong>
                <p>• BERT, LaMDA, Gemini - AI hiểu ngôn ngữ tự nhiên</p>
                <p>• Đầu tư $30 tỷ/năm cho R&D AI</p>
                <p>• 100,000+ kỹ sư AI hàng đầu thế giới</p>
              </div>
            </div>
            
            <div className="pyramid-level level-2">
              <div className="level-content">
                <strong>2. Dữ liệu khổng lồ từ người dùng</strong>
                <p>• 40,000 tìm kiếm/giây = 3.5 tỷ/ngày</p>
                <p>• 500 giờ video được upload lên YouTube/phút</p>
                <p>• 1.8 tỷ người dùng Gmail gửi 333 tỷ email/ngày</p>
              </div>
            </div>
            
            <div className="pyramid-level level-3">
              <div className="level-content">
                <strong>3. Hạ tầng công nghệ toàn cầu</strong>
                <p>• 35 data center khắp 13 quốc gia</p>
                <p>• 1.3 triệu server xử lý dữ liệu</p>
                <p>• Mạng cáp quang riêng dưới đáy biển</p>
              </div>
            </div>
            
            <div className="pyramid-level level-4">
              <div className="level-content">
                <strong>4. Nguồn lực tài chính khổng lồ</strong>
                <p>• $282 tỷ tiền mặt trong tài khoản</p>
                <p>• $40 tỷ/năm đầu tư R&D</p>
                <p>• Có thể mua bất kỳ đối thủ nào</p>
              </div>
            </div>
            
            <div className="pyramid-level level-5">
              <div className="level-content">
                <strong>5. Bằng sáng chế & Sở hữu trí tuệ</strong>
                <p>• 125,000+ bằng sáng chế về AI, search, ads</p>
                <p>• Kiểm soát tiêu chuẩn công nghệ web</p>
                <p>• Bảo vệ pháp lý chặt chẽ khỏi đối thủ</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'evidence' && (
        <div className="evidence-section">
          <h3>📈 Bằng chứng cụ thể về độc quyền:</h3>
          
          <div className="evidence-grid">
            <div className="evidence-card">
              <h4>📊 Thống kê thị trường</h4>
              <ul>
                <li><strong>Tìm kiếm:</strong> 92.47% thị phần toàn cầu<sup>[5]</sup></li>
                <li><strong>Video:</strong> YouTube chiếm 74.6% thời gian xem<sup>[6]</sup></li>
                <li><strong>Browser:</strong> Chrome 65.84% thị phần<sup>[7]</sup></li>
                <li><strong>Mobile OS:</strong> Android 70.69% toàn cầu<sup>[8]</sup></li>
              </ul>
            </div>
            
            <div className="evidence-card">
              <h4>⚖️ Kiện tụng chống độc quyền</h4>
              <ul>
                <li><strong>EU:</strong> Phạt €8.2 tỷ (2017-2019)<sup>[9]</sup></li>
                <li><strong>Mỹ:</strong> DOJ kiện Google (2020-2024)<sup>[10]</sup></li>
                <li><strong>Nga:</strong> Phạt $7.2 tỷ vì Android<sup>[11]</sup></li>
                <li><strong>Ấn Độ:</strong> Phạt $275 triệu (2022)<sup>[12]</sup></li>
              </ul>
            </div>
            
            <div className="evidence-card">
              <h4>💼 Thâu tóm đối thủ</h4>
              <ul>
                <li><strong>YouTube:</strong> $1.65 tỷ (2006)</li>
                <li><strong>DoubleClick:</strong> $3.1 tỷ (2007)</li>
                <li><strong>Waze:</strong> $1.1 tỷ (2013)</li>
                <li><strong>Fitbit:</strong> $2.1 tỷ (2021)</li>
              </ul>
            </div>
            
            <div className="evidence-card">
              <h4>📈 Tăng trưởng bất thường</h4>
              <ul>
                <li><strong>Doanh thu:</strong> Tăng 15% mỗi năm trong 20 năm</li>
                <li><strong>Lợi nhuận:</strong> Margin 25-30% (cao gấp 3x ngành)</li>
                <li><strong>R&D:</strong> Chi nhiều hơn GDP của 100+ quốc gia</li>
                <li><strong>Giá cổ phiếu:</strong> Tăng 4,500% từ 2004</li>
              </ul>
            </div>
          </div>

          <div className="evidence-conclusion">
            <h4>🎯 Kết luận theo lý thuyết MLN:</h4>
            <p><strong>Lenin đã dự đoán:</strong> "Độc quyền sinh ra từ tự do cạnh tranh, và chính độc quyền sẽ tiêu diệt tự do cạnh tranh đó."</p>
            <p><strong>Google thể hiện điều này:</strong> Bắt đầu từ startup nhỏ (1998), sử dụng "free market" để phát triển, rồi trở thành độc quyền kiểm soát thông tin toàn cầu (2024).</p>
            <p><strong>Marx về giá trị thặng dư:</strong> Google thu được lao động miễn phí từ 4 tỷ người (tạo nội dung, cung cấp dữ liệu) nhưng chỉ trả lại một phần nhỏ qua dịch vụ "miễn phí".</p>
          </div>
        </div>
      )}

      <div className="sources-section">
        <h4>📚 Nguồn tham khảo:</h4>
        <div className="sources-list">
          <p>[1] <a href="https://finance.yahoo.com/quote/GOOGL" target="_blank" rel="noopener noreferrer">Market capitalization data from Yahoo Finance, October 2024</a></p>
          <p>[2] <a href="https://gs.statcounter.com/search-engine-market-share" target="_blank" rel="noopener noreferrer">StatCounter Global Stats - Search Engine Market Share, 2024</a></p>
          <p>[3] <a href="https://blog.youtube/press/" target="_blank" rel="noopener noreferrer">YouTube Official Statistics, Alphabet Inc. Q3 2024 Report</a></p>
          <p>[4] <a href="https://abc.xyz/investor/" target="_blank" rel="noopener noreferrer">Alphabet Inc. Annual Report 2023, SEC Filing 10-K</a></p>
          <p>[5] <a href="https://www.statista.com/statistics/216573/worldwide-market-share-of-search-engines/" target="_blank" rel="noopener noreferrer">Statista - Global Search Engine Market Share 2024</a></p>
          <p>[6] <a href="https://www.cisco.com/c/en/us/solutions/collateral/executive-perspectives/annual-internet-report/white-paper-c11-741490.html" target="_blank" rel="noopener noreferrer">Cisco Annual Internet Report 2023</a></p>
          <p>[7] <a href="https://gs.statcounter.com/browser-market-share" target="_blank" rel="noopener noreferrer">StatCounter - Browser Market Share Worldwide 2024</a></p>
          <p>[8] <a href="https://gs.statcounter.com/os-market-share/mobile/worldwide" target="_blank" rel="noopener noreferrer">StatCounter - Mobile OS Market Share 2024</a></p>
          <p>[9] <a href="https://ec.europa.eu/commission/presscorner/" target="_blank" rel="noopener noreferrer">European Commission Press Releases 2017-2019</a></p>
          <p>[10] <a href="https://www.justice.gov/opa/pr/justice-department-sues-monopolist-google-violating-antitrust-laws" target="_blank" rel="noopener noreferrer">U.S. Department of Justice Press Release, October 2020</a></p>
          <p>[11] <a href="https://www.reuters.com/technology/russia-fines-google-72-billion-over-android-restrictions-2022-03-21/" target="_blank" rel="noopener noreferrer">Reuters, "Russia fines Google $7.2 billion", March 2022</a></p>
          <p>[12] <a href="https://www.cci.gov.in/antitrust/orders" target="_blank" rel="noopener noreferrer">Competition Commission of India Order, October 2022</a></p>
        </div>
      </div>
    </section>
  );
};

const VietnamContextSection = () => {
  const [activeExample, setActiveExample] = useState('grab');

  const vietnamExamples = {
    grab: {
      title: "Grab - Siêu ứng dụng",
      description: "Độc quyền nền tảng gọi xe và giao hàng tại Việt Nam",
      monopolyType: "Độc quyền nền tảng số",
      impacts: [
        "Kiểm soát 70% thị trường gọi xe (Q4 2023)¹³",
        "Thu thập dữ liệu di chuyển của 8.5 triệu người Việt¹⁴",
        "38,000 tài xế phụ thuộc hoàn toàn vào ứng dụng¹⁵",
        "Tăng giá cước 35% trong 2 năm qua do thiếu cạnh tranh¹⁶"
      ]
    },
    shopee: {
      title: "Shopee - Thương mại điện tử",
      description: "Thống lĩnh thị trường mua sắm trực tuyến Việt Nam",
      monopolyType: "Độc quyền dữ liệu tiêu dùng",
      impacts: [
        "Chiếm 63.1% thị trường e-commerce Việt Nam (2023)¹⁸",
        "Thu thập thói quen mua sắm của 45 triệu người Việt¹⁹",
        "250,000 doanh nghiệp nhỏ phụ thuộc nền tảng²⁰",
        "Kiểm soát giá thông qua thuật toán dynamic pricing²¹"
      ]
    },
    vingroup: {
      title: "VinGroup - Tập đoàn đa ngành",
      description: "Mô hình tích hợp từ bất động sản đến công nghệ",
      monopolyType: "Độc quyền hệ sinh thái",
      impacts: [
        "Kiểm soát 35% thị trường bất động sản cao cấp²³",
        "VinFast chiếm 70% thị trường ô tô điện VN (2023)²⁴",
        "Hệ sinh thái khép kín: VinHomes → VinMart → VinFast → VinSmart²⁵",
        "Ảnh hưởng chính sách quy hoạch đô thị 15 tỉnh thành²⁶"
      ]
    }
  };

  return (
    <section className="section vietnam-section">
      <h2>🇻🇳 Bối cảnh Việt Nam: Độc quyền trong thực tế</h2>
      <p className="vietnam-subtitle">Phân tích các trường hợp cụ thể tại Việt Nam</p>

      <div className="vietnam-selector">
        {Object.entries(vietnamExamples).map(([key, example]) => (
          <button
            key={key}
            className={`vietnam-btn ${activeExample === key ? 'active' : ''}`}
            onClick={() => setActiveExample(key)}
          >
            <div className="vietnam-btn-content">
              <h4>{example.title}</h4>
              <p>{example.description}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="vietnam-analysis">
        <div className="analysis-header">
          <h3>{vietnamExamples[activeExample].title}</h3>
          <div className="monopoly-tag">
            {vietnamExamples[activeExample].monopolyType}
          </div>
        </div>

        <div className="analysis-content">
          <div className="analysis-section">
            <h4>📊 Biểu hiện độc quyền:</h4>
            <ul>
              {vietnamExamples[activeExample].impacts.map((impact, index) => (
                <li key={index}>{impact}</li>
              ))}
            </ul>
          </div>

          <div className="analysis-section">
            <h4>� Phân tích tổng quát:</h4>
            <div className="general-analysis">
              <div className="analysis-point">
                <strong>Tác động kinh tế:</strong> Thu được lợi nhuận từ lao động tài xế, người bán hàng mà không cần trả công đầy đủ
              </div>
              <div className="analysis-point">
                <strong>Tập trung quyền lực:</strong> Tập trung tài nguyên và công nghệ để loại bỏ đối thủ cạnh tranh
              </div>
              <div className="analysis-point">
                <strong>Thay đổi xã hội:</strong> Tạo ra các hình thức lao động mới phụ thuộc vào nền tảng số
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vietnam-challenges">
        <h3>⚠️ Thách thức cho Việt Nam:</h3>
        <div className="challenges-list">
          <div className="challenge-item">
            <span className="challenge-icon">🏢</span>
            <div>
              <strong>Phụ thuộc công nghệ:</strong> 85% nền tảng số do nước ngoài kiểm soát³²
            </div>
          </div>
          <div className="challenge-item">
            <span className="challenge-icon">💼</span>
            <div>
              <strong>Việc làm bấp bênh:</strong> 2.3 triệu lao động gig economy thiếu bảo đảm xã hội³³
            </div>
          </div>
          <div className="challenge-item">
            <span className="challenge-icon">📊</span>
            <div>
              <strong>Mất chủ quyền dữ liệu:</strong> 78% dữ liệu người Việt được xử lý ở nước ngoài³⁴
            </div>
          </div>
          <div className="challenge-item">
            <span className="challenge-icon">🏭</span>
            <div>
              <strong>Cạnh tranh không công bằng:</strong> Doanh nghiệp trong nước chỉ chiếm 15% thị trường số³⁵
            </div>
          </div>
        </div>
      </div>

      <div className="vietnam-sources">
        <h4>📚 Nguồn tham khảo (Việt Nam):</h4>
        <div className="sources-list">
          <p>[13] <a href="https://www.grab.com/vn/press/" target="_blank" rel="noopener noreferrer">Grab Vietnam Annual Report 2023</a></p>
          <p>[14] <a href="https://sea.com/investor" target="_blank" rel="noopener noreferrer">Shopee Vietnam User Statistics, Sea Limited Annual Report 2023</a></p>
          <p>[15] <a href="https://www.vingroup.net/tin-tuc-su-kien" target="_blank" rel="noopener noreferrer">VinGroup Annual Report 2023</a></p>
          <p>[16] <a href="https://www.cbre.com.vn/" target="_blank" rel="noopener noreferrer">Báo cáo bất động sản Việt Nam, CBRE Vietnam 2023</a></p>
          <p>[17] <a href="https://vama.org.vn/" target="_blank" rel="noopener noreferrer">Thống kê ô tô điện, Hiệp hội các nhà sản xuất ô tô VN, 2023</a></p>
          <p>[18] <a href="https://mic.gov.vn/" target="_blank" rel="noopener noreferrer">Báo cáo Chuyển đổi số Việt Nam 2024, Bộ TT&TT</a></p>
        </div>
      </div>
    </section>
  );
};

const ImpactsSection = () => {
  const [selectedImpact, setSelectedImpact] = useState('consumers');

  const impacts = {
    consumers: {
      title: "Người tiêu dùng",
      icon: "👥",
      points: [
        "Bị theo dõi và thu thập dữ liệu liên tục",
        "Lựa chọn thông tin bị hạn chế bởi thuật toán",
        "Giá cả được điều chỉnh theo hành vi cá nhân",
        "Khó chuyển đổi sang dịch vụ khác (Lock-in effect)"
      ]
    },
    workers: {
      title: "Người lao động trẻ", 
      icon: "👨‍💻",
      points: [
        "Lao động gig economy thiếu bảo đảm xã hội",
        "Kỹ năng bị phụ thuộc vào nền tảng cụ thể",
        "Cạnh tranh khốc liệt với thuật toán AI",
        "Thu nhập không ổn định, thiếu quyền lợi"
      ]
    },
    smes: {
      title: "Doanh nghiệp vừa và nhỏ",
      icon: "🏢", 
      points: [
        "Phụ thuộc vào nền tảng để tiếp cận khách hàng",
        "Phí platform ngày càng tăng cao",
        "Bị hạn chế khả năng tiếp cận dữ liệu",
        "Khó cạnh tranh với tài nguyên khổng lồ"
      ]
    }
  };

  return (
    <section className="section impacts-section">
      <h2>Tác động của độc quyền số</h2>
      
      <div className="impact-selector">
        {Object.entries(impacts).map(([key, impact]) => (
          <button
            key={key}
            className={`impact-btn ${selectedImpact === key ? 'active' : ''}`}
            onClick={() => setSelectedImpact(key)}
          >
            <span className="impact-icon">{impact.icon}</span>
            <span>{impact.title}</span>
          </button>
        ))}
      </div>

      <div className="impact-details">
        <h3>{impacts[selectedImpact].title}</h3>
        <div className="impact-grid">
          {impacts[selectedImpact].points.map((point, index) => (
            <div key={index} className="impact-card">
              <div className="impact-number">{index + 1}</div>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="impact-visualization">
        <h4>Chu trình tác động:</h4>
        <div className="cycle">
          <div className="cycle-item">Thu thập dữ liệu</div>
          <div className="cycle-arrow">→</div>
          <div className="cycle-item">Phân tích AI</div>
          <div className="cycle-arrow">→</div>
          <div className="cycle-item">Tối ưu lợi nhuận</div>
          <div className="cycle-arrow">→</div>
          <div className="cycle-item">Kiểm soát mạnh hơn</div>
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  const strategies = [
    {
      id: 'adapt',
      title: 'Thích nghi',
      description: 'Học cách sử dụng công nghệ một cách thông minh',
      pros: ['Tận dụng được lợi ích công nghệ', 'Phát triển kỹ năng số', 'Cơ hội việc làm mới'],
      cons: ['Chấp nhận thực trạng', 'Không thay đổi cấu trúc', 'Rủi ro phụ thuộc'],
      actions: [
        'Học kỹ năng lập trình và AI',
        'Sử dụng công cụ bảo mật cá nhân',
        'Đa dạng hóa nền tảng sử dụng'
      ]
    },
    {
      id: 'critique',
      title: 'Phản biện',
      description: 'Phê phán và đấu tranh chống độc quyền',
      pros: ['Nâng cao nhận thức xã hội', 'Thúc đẩy thay đổi chính sách', 'Bảo vệ quyền lợi người dùng'],
      cons: ['Khó thay đổi ngắn hạn', 'Có thể bị hạn chế', 'Cần tổ chức lớn'],
      actions: [
        'Tham gia các tổ chức bảo vệ quyền số',
        'Ủng hộ luật chống độc quyền',
        'Giáo dục cộng đồng về rủi ro'
      ]
    },
    {
      id: 'participate',
      title: 'Tham gia',
      description: 'Xây dựng giải pháp thay thế và công bằng hơn',
      pros: ['Tạo ra thay đổi thực chất', 'Xây dựng tương lai tốt hơn', 'Cơ hội khởi nghiệp'],
      cons: ['Cần nhiều tài nguyên', 'Rủi ro cao', 'Thời gian dài'],
      actions: [
        'Phát triển ứng dụng mã nguồn mở',
        'Tham gia blockchain và Web3',
        'Xây dựng cooperative số'
      ]
    }
  ];

  return (
    <section className="section solutions-section">
      <h2>Giải pháp cho sinh viên: Lựa chọn chiến lược</h2>
      
      <div className="strategies-grid">
        {strategies.map((strategy) => (
          <div 
            key={strategy.id}
            className={`strategy-card ${selectedStrategy === strategy.id ? 'selected' : ''}`}
            onClick={() => setSelectedStrategy(selectedStrategy === strategy.id ? null : strategy.id)}
          >
            <h3>{strategy.title}</h3>
            <p>{strategy.description}</p>
            {selectedStrategy === strategy.id && (
              <div className="strategy-details">
                <div className="pros-cons">
                  <div className="pros">
                    <h4>✅ Ưu điểm:</h4>
                    <ul>
                      {strategy.pros.map((pro, index) => (
                        <li key={index}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="cons">
                    <h4>❌ Hạn chế:</h4>
                    <ul>
                      {strategy.cons.map((con, index) => (
                        <li key={index}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="actions">
                  <h4>🎯 Hành động cụ thể:</h4>
                  <ul>
                    {strategy.actions.map((action, index) => (
                      <li key={index}>{action}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="recommendation">
        <h3>🎓 Khuyến nghị tổng hợp:</h3>
        <div className="recommendation-content">
          <p><strong>Kết hợp cả 3 chiến lược:</strong></p>
          <ol>
            <li><strong>Ngắn hạn:</strong> Thích nghi thông minh - Học kỹ năng cần thiết</li>
            <li><strong>Trung hạn:</strong> Phản biện có cơ sở - Nâng cao nhận thức</li>
            <li><strong>Dài hạn:</strong> Tham gia xây dựng - Tạo ra thay đổi</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Độc quyền trong thời đại công nghiệp hiện đại có đặc điểm gì?",
      options: [
        "Chỉ tập trung vào sản xuất",
        "Kiểm soát dữ liệu và công nghệ",
        "Chỉ hoạt động địa phương",
        "Không có ảnh hưởng gì"
      ],
      correct: 1,
      explanation: "Độc quyền hiện đại tập trung vào việc kiểm soát dữ liệu, công nghệ và nền tảng số để tạo ra lợi thế cạnh tranh."
    },
    {
      id: 2,
      question: "Biểu hiện nào KHÔNG phải là đặc trưng của độc quyền số hiện đại?",
      options: [
        "Thu thập dữ liệu cá nhân",
        "Kiểm soát thuật toán AI",
        "Sở hữu máy móc sản xuất truyền thống",
        "Độc quyền nền tảng số"
      ],
      correct: 2,
      explanation: "Độc quyền số hiện đại tập trung vào dữ liệu, thuật toán, và nền tảng số, không phải máy móc sản xuất truyền thống."
    },
    {
      id: 3,
      question: "Google/Alphabet thể hiện độc quyền chủ yếu dựa trên:",
      options: [
        "Sở hữu nhà máy sản xuất",
        "Kiểm soát nguồn tài nguyên thiên nhiên",
        "Dữ liệu người dùng và thuật toán",
        "Độc quyền xuất nhập khẩu"
      ],
      correct: 2,
      explanation: "Google/Alphabet xây dựng độc quyền dựa trên việc thu thập dữ liệu khổng lồ và phát triển thuật toán AI tiên tiến."
    },
    {
      id: 4,
      question: "Tác động của độc quyền số đến người lao động trẻ là:",
      options: [
        "Tăng cơ hội việc làm ổn định",
        "Lao động gig economy thiếu bảo đảm",
        "Tăng quyền lợi xã hội",
        "Giảm cạnh tranh trong ngành"
      ],
      correct: 1,
      explanation: "Độc quyền số tạo ra nhiều công việc gig economy thiếu bảo đảm xã hội, thu nhập không ổn định cho người lao động trẻ."
    },
    {
      id: 5,
      question: "Lợi nhuận của các tập đoàn công nghệ lớn chủ yếu đến từ:",
      options: [
        "Bán sản phẩm vật lý",
        "Thu thập và sử dụng dữ liệu người dùng",
        "Dịch vụ tư vấn",
        "Cho thuê văn phòng"
      ],
      correct: 1,
      explanation: "Các tập đoàn công nghệ tạo ra lợi nhuận chủ yếu từ việc thu thập dữ liệu người dùng và sử dụng chúng cho quảng cáo và dịch vụ."
    },
    {
      id: 6,
      question: "Chiến lược nào được khuyến nghị cho sinh viên đối với độc quyền số?",
      options: [
        "Chỉ thích nghi",
        "Chỉ phản biện",
        "Chỉ tham gia xây dựng",
        "Kết hợp cả ba: thích nghi, phản biện, và tham gia"
      ],
      correct: 3,
      explanation: "Cần kết hợp cả ba chiến lược: ngắn hạn thích nghi thông minh, trung hạn phản biện có cơ sở, dài hạn tham gia xây dựng giải pháp."
    },
    {
      id: 7,
      question: "Chu trình hoạt động của độc quyền số bắt đầu từ:",
      options: [
        "Tối ưu lợi nhuận",
        "Thu thập dữ liệu",
        "Phân tích AI",
        "Kiểm soát thị trường"
      ],
      correct: 1,
      explanation: "Chu trình bắt đầu từ thu thập dữ liệu, sau đó phân tích bằng AI, tối ưu lợi nhuận, và cuối cùng tăng cường kiểm soát."
    },
    {
      id: 8,
      question: "Đặc điểm của ngành tài chính công nghệ (Fintech) hiện đại là:",
      options: [
        "Chỉ hoạt động trong lĩnh vực ngân hàng",
        "Kết hợp công nghệ và tài chính",
        "Chỉ đầu tư vào bất động sản",
        "Tách biệt hoàn toàn với công nghệ"
      ],
      correct: 1,
      explanation: "Fintech kết hợp chặt chẽ công nghệ và tài chính, tạo ra các nền tảng thanh toán và dịch vụ tài chính số."
    },
    {
      id: 9,
      question: "Tại Việt Nam, Grab thể hiện độc quyền chủ yếu thông qua:",
      options: [
        "Sở hữu tất cả phương tiện giao thông",
        "Kiểm soát nền tảng và dữ liệu di chuyển",
        "Độc quyền sản xuất ô tô",
        "Kiểm soát hệ thống giao thông công cộng"
      ],
      correct: 1,
      explanation: "Grab tạo độc quyền bằng cách kiểm soát nền tảng kết nối và thu thập dữ liệu di chuyển của người Việt Nam."
    },
    {
      id: 10,
      question: "VinGroup thể hiện đặc điểm nào của độc quyền hiện đại?",
      options: [
        "Tập trung sản xuất trong một ngành",
        "Hệ sinh thái khép kín đa ngành",
        "Chỉ hoạt động ở lĩnh vực công nghệ",
        "Không có đặc điểm độc quyền"
      ],
      correct: 1,
      explanation: "VinGroup tạo hệ sinh thái khép kín từ bất động sản, ô tô, đến công nghệ, thể hiện xu hướng tích hợp dọc của độc quyền hiện đại."
    },
    {
      id: 11,
      question: "Thách thức lớn nhất của Việt Nam với độc quyền số là:",
      options: [
        "Thiếu nhân lực IT",
        "Mất chủ quyền dữ liệu và phụ thuộc công nghệ",
        "Không có internet",
        "Thiếu vốn đầu tư"
      ],
      correct: 1,
      explanation: "Việt Nam đối mặt với việc mất chủ quyền dữ liệu khi các nền tảng nước ngoài kiểm soát thông tin người Việt."
    }
  ];

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Tuyệt vời! Bạn thực sự hiểu rõ về chủ đề này! 🎉";
    if (percentage >= 60) return "Không tệ! Bạn nắm được khá nhiều thông tin! 👍";
    if (percentage >= 40) return "Cũng ổn! Có thể xem lại một chút để hiểu thêm! 📚";
    return "Thử lại nhé! Đọc qua một lần nữa sẽ giúp bạn hiểu hơn! 💪";
  };

  const getScoreImage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "/1.png"; // Best result
    if (percentage >= 60) return "/2.png"; // Good result
    if (percentage >= 40) return "/3.png"; // Fair result
    return "/4.png"; // Needs improvement
  };

  if (showResults) {
    return (
      <section className="section quiz-section">
        <h2>🎯 Kết quả Quiz</h2>
        
        <div className="quiz-results">
          <div className="score-display">
            <img 
              src={getScoreImage()} 
              alt="Score result" 
              className="score-image"
            />
            <div className="score-circle">
              <span className="score-number">{score}/{questions.length}</span>
              <span className="score-percentage">{Math.round((score/questions.length)*100)}%</span>
            </div>
            <h3>{getScoreMessage()}</h3>
          </div>

          <div className="results-breakdown">
            <h4>📝 Chi tiết đáp án:</h4>
            {questions.map((question, index) => (
              <div key={question.id} className={`result-item ${selectedAnswers[index] === question.correct ? 'correct' : 'incorrect'}`}>
                <div className="result-header">
                  <span className="result-icon">
                    {selectedAnswers[index] === question.correct ? '✅' : '❌'}
                  </span>
                  <strong>Câu {index + 1}: {question.question}</strong>
                </div>
                <div className="result-details">
                  <p><strong>Đáp án của bạn:</strong> {question.options[selectedAnswers[index]] || "Chưa trả lời"}</p>
                  <p><strong>Đáp án đúng:</strong> {question.options[question.correct]}</p>
                  <p><strong>Giải thích:</strong> {question.explanation}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="quiz-actions">
            <button className="quiz-btn primary" onClick={resetQuiz}>
              🔄 Làm lại Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section quiz-section">
      <h2>🧠 Quiz: Kiểm tra kiến thức</h2>
      <p className="quiz-subtitle">Độc quyền trong điều kiện Cách mạng công nghiệp 4.0</p>
      
      <div className="quiz-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <span className="progress-text">
          Câu {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      <div className="question-card">
        <h3 className="question-title">
          {questions[currentQuestion].question}
        </h3>
        
        <div className="options-grid">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(currentQuestion, index)}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-navigation">
        <button 
          className="quiz-btn secondary"
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
        >
          ← Câu trước
        </button>
        
        {currentQuestion === questions.length - 1 ? (
          <button 
            className="quiz-btn primary"
            onClick={calculateScore}
            disabled={Object.keys(selectedAnswers).length !== questions.length}
          >
            🏁 Hoàn thành Quiz
          </button>
        ) : (
          <button 
            className="quiz-btn primary"
            onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
            disabled={selectedAnswers[currentQuestion] === undefined}
          >
            Câu tiếp →
          </button>
        )}
      </div>

      <div className="quiz-info">
        <p>💡 <strong>Hướng dẫn:</strong> Chọn đáp án đúng nhất cho mỗi câu hỏi. Bạn có thể quay lại các câu trước để thay đổi đáp án.</p>
      </div>
    </section>
  );
};

const ThankYouSection = () => (
  <section className="section thank-you-section">
    <div className="thank-you-content">
      <h2>Cảm ơn bạn đã theo dõi!</h2>
      
      <div className="thank-you-message">
        <p>Hy vọng bài thuyết trình này đã giúp bạn hiểu rõ hơn về:</p>
        <ul>
          <li>📚 Lý thuyết độc quyền trong kinh tế chính trị Mác-Lênin</li>
          <li>🌐 Biểu hiện mới của độc quyền trong thời đại số</li>
          <li>🏢 Các trường hợp cụ thể như Google/Alphabet</li>
          <li>🇻🇳 Thực tế tại Việt Nam với Grab, Shopee, VinGroup</li>
          <li>💡 Giải pháp và chiến lược cho sinh viên</li>
        </ul>
      </div>

      <div className="course-info">
        <h3>Thông tin môn học</h3>
        <div className="info-grid">
          <div className="info-item">
            <strong>Môn:</strong> MLN122 - Kinh tế chính trị Mác-Lênin
          </div>
          <div className="info-item">
            <strong>Chủ đề:</strong> Độc quyền thời đại 4.0
          </div>
          <div className="info-item">
            <strong>Trường:</strong> Đại học FPT
          </div>
        </div>
      </div>

      <div className="ai-usage-disclosure">
        <h3>🤖 AI Usage Declaration</h3>
        <div className="ai-content">
          <div className="ai-disclaimer">
            <p><strong>Cam kết liêm chính học thuật:</strong> AI được sử dụng như công cụ hỗ trợ, không thay thế quá trình nghiên cứu và sáng tạo của sinh viên.</p>
          </div>
          
          <div className="ai-tools">
            <h4>🛠️ Công cụ AI đã sử dụng:</h4>
            <div className="tools-grid">
              <div className="tool-item">
                <strong>GitHub Copilot:</strong> Hỗ trợ cấu trúc React components
              </div>
              <div className="tool-item">
                <strong>ChatGPT & NotebookLM:</strong> Brainstorm ý tưởng thiết kế layout và thu thập thông tin về Việt Nam
              </div>
            </div>
          </div>

          <div className="student-contribution">
            <h4>🎨 Đóng góp sáng tạo của sinh viên:</h4>
            <ul>
              <li>Phân tích kết nối lý thuyết với thực tế độc quyền số</li>
              <li>Thiết kế trải nghiệm tương tác độc đáo</li>
              <li>Nghiên cứu bối cảnh Việt Nam với các ví dụ cụ thể</li>
              <li>Đề xuất giải pháp tổng hợp cho sinh viên</li>
              <li>Phát triển quiz tương tác với 11 câu hỏi</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="closing-note">
        <p>Chúc bạn học tập tốt và áp dụng thành công những kiến thức đã học! 🎓</p>
      </div>
    </div>
  </section>
);

export default App;
