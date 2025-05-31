import React from 'react';

const PortPage38 = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: '100px',
        marginBottom: '100px',
        border: '1px solid #d0cdcd',
        boxShadow: '2px 2px 3px 2px #d0cdcd',
        borderRadius: '10px',
      }}
    >
      <h3
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: '25px',
          backgroundColor: '#bc9e51',
          paddingTop: '15px',
          paddingBottom: '15px',
          borderRadius: '10px',
        }}
      >
        Investing With Purpose: How Mutual Funds Can Help You Achieve Your Goals
      </h3>
      <div style={{ textAlign: 'center' }}>
        <img
          id="blogImg"
          src="/img/investing-with-purpose.png"
          alt="Goal-based investing"
        />
      </div>
      <div className="container" style={{ fontSize: '18px', padding: '25px' }}>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Imagine setting out on a road trip without knowing your destination.
          You'd likely waste time, fuel, and energy — and end up nowhere
          meaningful. That's exactly what investing without clear goals can feel
          like. Goal-based investing brings clarity, structure, and purpose to
          your financial journey — and mutual funds are one of the best vehicles
          to get you there.
        </p>

        <strong style={{ marginTop: '15px' }}>
          What Is Goal-Based Investing?
        </strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Goal-based investing is about aligning your investments with specific
          life objectives — whether it's buying a house, funding your child's
          education, or planning for retirement. Each goal has a defined
          timeline and required amount, allowing you to select the right
          investment strategy based on time horizon and risk profile.
        </p>

        <strong style={{ marginTop: '15px' }}>Why It Matters</strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Clear direction: Know exactly what you're investing for.
          <br />
          Motivation: Purpose keeps you focused and committed.
          <br />
          Tailored risk: Match your investments to your timeline.
          <br />
          Trackable progress: Monitor and adjust as needed.
        </p>

        <strong style={{ marginTop: '15px' }}>
          Why Mutual Funds Work Well
        </strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Mutual funds offer flexibility, professional management, and a range
          of options to suit different goals:
          <br />
          Short-term goals (1–3 years): Use liquid or ultra-short-term debt
          funds for stability and quick access.
          <br />
          Medium-term goals (3–5 years): Consider hybrid funds to balance growth
          and risk.
          <br />
          Long-term goals (5+ years): Equity mutual funds offer high growth
          potential through the power of compounding.
        </p>

        <strong style={{ marginTop: '15px' }}>The Power of SIPs</strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Systematic Investment Plans (SIPs) are a smart way to invest regularly
          and stay disciplined. SIPs help smooth out market volatility and build
          wealth gradually, making them ideal for long-term goals like
          retirement or education.
        </p>

        <strong style={{ marginTop: '15px' }}>Matching Goals to Funds</strong>
        <div style={{ overflowX: 'auto', marginTop: '15px' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '12pt',
              marginTop: '15px',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th
                  style={{
                    padding: '12px',
                    border: '1px solid #ddd',
                    textAlign: 'left',
                  }}
                >
                  Goal
                </th>
                <th
                  style={{
                    padding: '12px',
                    border: '1px solid #ddd',
                    textAlign: 'left',
                  }}
                >
                  Suggested Mutual Fund Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  Emergency Fund
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  Liquid or Ultra-Short-Term Debt Funds
                </td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  Vacation or Car Purchase
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  Short-Term Debt Funds
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  Buying a Home
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  Hybrid Funds
                </td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  Child's Education
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  Equity Funds or Child-Specific Plans
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  Retirement
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  Equity Funds via long-term SIPs
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <strong style={{ marginTop: '15px' }}>
          Benefits of Goal-Based Investing
        </strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Focus: Every rupee is directed toward a clear goal.
          <br />
          Customization: Choose funds that match your needs and risk appetite.
          <br />
          Emotional discipline: Stay calm during market swings.
          <br />
          Consistency: SIPs bring regularity to your investments.
        </p>

        <strong style={{ marginTop: '15px' }}>Final Thoughts</strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Investing becomes more effective and meaningful when it's aligned with
          your life goals. Mutual funds offer the tools, flexibility, and growth
          potential to help you turn dreams into reality — whether you're
          planning for next year or the next 30 years.
          <br />
          <br />
          Start today: define your goals, pick the right mutual funds, and stay
          the course. The earlier you begin, the closer your dreams become.
          <br />
          <br />
          Disclaimer: This article is for educational purposes only. Mutual Fund
          investments are subject to market risks. Please read all
          scheme-related documents carefully before investing.
        </p>
      </div>
    </div>
  );
};

export default PortPage38;
