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
    'impacts', 
    'solutions',
    'quiz',
    'ai-usage'
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
        {currentSection === 3 && <ImpactsSection />}
        {currentSection === 4 && <SolutionsSection />}
        {currentSection === 5 && <QuizSection />}
        {currentSection === 6 && <AIUsageSection />}
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
      content: "Độc quyền là giai đoạn cao nhất của chủ nghĩa tư bản, đặc trưng bởi sự tập trung sản xuất và tư bản.",
      modern: "Ngày nay thể hiện qua việc tập trung dữ liệu và công nghệ."
    },
    {
      title: "Giá trị thặng dư của Marx", 
      content: "Lợi nhuận siêu ngạch được tạo ra từ việc chiếm đoạt lao động không được trả công.",
      modern: "Thu thập dữ liệu cá nhân miễn phí để tạo ra lợi nhuận khổng lồ."
    },
    {
      title: "Tư bản tài chính",
      content: "Sự kết hợp giữa tư bản ngân hàng và tư bản công nghiệp.",
      modern: "Kết hợp giữa công nghệ và tài chính (Fintech), nền tảng thanh toán."
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
            <h3>Alphabet Inc.</h3>
            <p>Vốn hóa thị trường: $1.7 nghìn tỷ USD (2024)</p>
            <p>Thị phần tìm kiếm: {'>'} 90% toàn cầu</p>
            <p>YouTube: {'>'} 2 tỷ người dùng</p>
          </div>
        </div>
      </div>

      <div className="case-tabs">
        <button 
          className={`case-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Hình thức độc quyền
        </button>
        <button 
          className={`case-tab ${activeTab === 'foundation' ? 'active' : ''}`}
          onClick={() => setActiveTab('foundation')}
        >
          Cơ sở độc quyền
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="monopoly-forms">
          <div className="monopoly-item">
            <h4>🔍 Độc quyền tìm kiếm</h4>
            <p>Kiểm soát {'>'} 90% thị trường tìm kiếm toàn cầu, định hình thông tin người dùng tiếp cận</p>
          </div>
          <div className="monopoly-item">
            <h4>📱 Hệ sinh thái khép kín</h4>
            <p>Android, Chrome, YouTube, Gmail tạo thành mạng lưới khép kín khó thoát ra</p>
          </div>
          <div className="monopoly-item">
            <h4>📊 Độc quyền dữ liệu</h4>
            <p>Thu thập dữ liệu từ mọi hoạt động trực tuyến để tạo lợi thế cạnh tranh</p>
          </div>
          <div className="monopoly-item">
            <h4>💰 Độc quyền quảng cáo</h4>
            <p>Kiểm soát {'>'} 28% thị trường quảng cáo số toàn cầu</p>
          </div>
        </div>
      )}

      {activeTab === 'foundation' && (
        <div className="foundation-pyramid">
          <div className="pyramid-level level-1">
            <span>Thuật toán AI tiên tiến</span>
          </div>
          <div className="pyramid-level level-2">
            <span>Dữ liệu khổng lồ từ tỷ người dùng</span>
          </div>
          <div className="pyramid-level level-3">
            <span>Hạ tầng công nghệ toàn cầu</span>
          </div>
          <div className="pyramid-level level-4">
            <span>Nguồn lực tài chính khổng lồ</span>
          </div>
          <div className="pyramid-level level-5">
            <span>Bằng sáng chế & Sở hữu trí tuệ</span>
          </div>
        </div>
      )}
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
      question: "Theo Lenin, độc quyền là giai đoạn nào của chủ nghĩa tư bản?",
      options: [
        "Giai đoạn đầu",
        "Giai đoạn phát triển",
        "Giai đoạn cao nhất",
        "Giai đoạn suy thoái"
      ],
      correct: 2,
      explanation: "Lenin khẳng định độc quyền là giai đoạn cao nhất của chủ nghĩa tư bản, đặc trưng bởi sự tập trung sản xuất và tư bản."
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
      question: "Theo Kinh tế chính trị Mác-Lênin, giá trị thặng dư trong thời đại số được tạo ra từ:",
      options: [
        "Lao động sản xuất hàng hóa",
        "Thu thập và thương mại hóa dữ liệu cá nhân",
        "Đầu tư tài chính",
        "Xuất khẩu hàng hóa"
      ],
      correct: 1,
      explanation: "Trong thời đại số, giá trị thặng dư được tạo ra từ việc thu thập dữ liệu cá nhân miễn phí và thương mại hóa chúng để tạo lợi nhuận."
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
      question: "Chu trình tác động của độc quyền số bắt đầu từ:",
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
      question: "Đặc điểm của tư bản tài chính hiện đại là:",
      options: [
        "Chỉ hoạt động trong lĩnh vực ngân hàng",
        "Kết hợp công nghệ và tài chính (Fintech)",
        "Chỉ đầu tư vào bất động sản",
        "Tách biệt hoàn toàn với công nghệ"
      ],
      correct: 1,
      explanation: "Tư bản tài chính hiện đại kết hợp chặt chẽ với công nghệ, tạo ra các nền tảng Fintech và hệ thống thanh toán số."
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
    if (percentage >= 80) return "Xuất sắc! Bạn đã nắm vững lý thuyết MLN122! 🎉";
    if (percentage >= 60) return "Tốt! Bạn hiểu khá tốt về độc quyền thời đại 4.0! 👍";
    if (percentage >= 40) return "Khá! Hãy ôn lại một số khái niệm cơ bản! 📚";
    return "Cần cố gắng thêm! Hãy xem lại các phần lý thuyết! 💪";
  };

  if (showResults) {
    return (
      <section className="section quiz-section">
        <h2>🎯 Kết quả Quiz MLN122</h2>
        
        <div className="quiz-results">
          <div className="score-display">
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
            <button className="quiz-btn secondary" onClick={() => window.print()}>
              🖨️ In kết quả
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section quiz-section">
      <h2>🧠 Quiz: Kiểm tra kiến thức MLN122</h2>
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

const AIUsageSection = () => (
  <section className="section ai-usage-section">
    <h2>Phụ lục: AI Usage Declaration</h2>
    
    <div className="ai-declaration">
      <div className="declaration-card">
        <h3>📋 Cam kết liêm chính học thuật</h3>
        <p>Chúng tôi cam kết AI chỉ được sử dụng như công cụ hỗ trợ, không thay thế hoàn toàn quá trình nghiên cứu và sáng tạo của sinh viên.</p>
      </div>

      <div className="ai-usage-table">
        <h3>🤖 Chi tiết sử dụng AI</h3>
        <table>
          <thead>
            <tr>
              <th>Công cụ AI</th>
              <th>Mục đích sử dụng</th>
              <th>Prompt chính</th>
              <th>Kết quả</th>
              <th>Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GitHub Copilot</td>
              <td>Hỗ trợ code React components</td>
              <td>"Create interactive infographic components"</td>
              <td>Basic component structure</td>
              <td>Tùy chỉnh giao diện, thêm nội dung Vietnamese</td>
            </tr>
            <tr>
              <td>ChatGPT</td>
              <td>Brainstorm layout ideas</td>
              <td>"Modern monopoly infographic design"</td>
              <td>Layout suggestions</td>
              <td>Điều chỉnh phù hợp yêu cầu bài tập</td>
            </tr>
            <tr>
              <td>AI Image Generator</td>
              <td>Tạo icon và illustrations</td>
              <td>"Simple icons for tech monopoly"</td>
              <td>Basic icons</td>
              <td>Tối ưu kích thước, màu sắc</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="verification">
        <h3>✅ Kiểm chứng thông tin</h3>
        <div className="sources">
          <h4>Nguồn chính thống được sử dụng:</h4>
          <ul>
            <li>Giáo trình Lý luận chính trị - NXB Chính trị Quốc gia Sự thật (2021)</li>
            <li>Nghị quyết Đại hội XIII của Đảng về phát triển kinh tế số</li>
            <li>Báo cáo "State of Global Markets" - OECD (2024)</li>
            <li>Dữ liệu tài chính chính thức từ SEC filings của Alphabet Inc.</li>
          </ul>
        </div>
      </div>

      <div className="creative-contribution">
        <h3>🎨 Đóng góp sáng tạo của sinh viên</h3>
        <ul>
          <li>Phân tích kết nối lý thuyết Mác-Lênin với thực tế độc quyền số</li>
          <li>Thiết kế trải nghiệm tương tác độc đáo</li>
          <li>Lựa chọn case study Google/Alphabet và phân tích chi tiết</li>
          <li>Đề xuất giải pháp 3 chiến lược tổng hợp cho sinh viên</li>
          <li>Adaptation cho bối cảnh Việt Nam</li>
        </ul>
      </div>
    </div>
  </section>
);

export default App;
