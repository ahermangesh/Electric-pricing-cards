import React from 'react';
import ElectricBorder from './ElectricBorder';

const App: React.FC = () => {
  const cardStyle = {
    padding: '32px 24px',
    borderRadius: '16px',
    width: '280px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
    position: 'relative' as const,
  };

  const regularCardStyle = {
    ...cardStyle,
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
  };

  const buttonStyle = {
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '-0.01em',
    transition: 'all 0.3s ease',
    border: 'none',
  };

  const regularButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#333',
    color: '#fff',
  };

  const featuredButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#7df9ff',
    color: '#000',
    boxShadow: '0 0 20px rgba(125, 249, 255, 0.3)',
  };

  return (
    <>
      {/* Dark Mode Version */}
      <div style={{ 
        padding: '50px', 
        backgroundColor: '#0a0a0a', 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            color: '#fff', 
            fontSize: '48px', 
            margin: '0 0 16px 0',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            lineHeight: '1.1'
          }}>
            Choose Your Plan
          </h1>
          <p style={{ 
            color: '#888', 
            fontSize: '18px', 
            margin: 0,
            maxWidth: '600px',
            fontWeight: '400',
            lineHeight: '1.6',
            letterSpacing: '-0.01em'
          }}>
            Select the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '24px', 
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {/* Basic Plan */}
          <div style={regularCardStyle}>
            <div>
              <div style={{ 
                backgroundColor: '#333', 
                color: '#fff', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                BASIC
              </div>
              <h3 style={{ color: '#fff', margin: '0 0 8px 0', fontSize: '24px', fontWeight: '600', letterSpacing: '-0.01em' }}>Starter</h3>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ color: '#fff', fontSize: '36px', fontWeight: '800', letterSpacing: '-0.02em' }}>$9</span>
                <span style={{ color: '#888', fontSize: '16px' }}>/month</span>
              </div>
              <ul style={{ 
                color: '#ccc', 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                lineHeight: '1.8'
              }}>
                <li>✓ 5 Projects</li>
                <li>✓ 10GB Storage</li>
                <li>✓ Email Support</li>
                <li>✓ Basic Analytics</li>
              </ul>
            </div>
            <button style={regularButtonStyle}>Get Started</button>
          </div>

          {/* Featured Plan with Electric Border */}
          <div style={{ position: 'relative', transform: 'scale(1.05)' }}>
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#7df9ff',
              color: '#000',
              padding: '6px 20px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              boxShadow: '0 0 20px rgba(125, 249, 255, 0.5)',
              zIndex: 10,
            }}>
              MOST POPULAR
            </div>
            <ElectricBorder
              color="#7df9ff"
              speed={1.2}
              chaos={0.3}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div style={{
                ...cardStyle,
                backgroundColor: '#1a1a1a',
                border: 'none',
                margin: 0,
              }}>
                <div>
                  <div style={{ 
                    backgroundColor: '#7df9ff', 
                    color: '#000', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    display: 'inline-block',
                    marginBottom: '16px',
                    fontWeight: '600'
                  }}>
                    PRO
                  </div>
                  <h3 style={{ color: '#fff', margin: '0 0 8px 0', fontSize: '24px', fontWeight: '600', letterSpacing: '-0.01em' }}>Professional</h3>
                  <div style={{ marginBottom: '24px' }}>
                    <span style={{ color: '#fff', fontSize: '36px', fontWeight: '800', letterSpacing: '-0.02em' }}>$29</span>
                    <span style={{ color: '#888', fontSize: '16px' }}>/month</span>
                  </div>
                  <ul style={{ 
                    color: '#ccc', 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    lineHeight: '1.8'
                  }}>
                    <li>✓ Unlimited Projects</li>
                    <li>✓ 100GB Storage</li>
                    <li>✓ Priority Support</li>
                    <li>✓ Advanced Analytics</li>
                    <li>✓ Team Collaboration</li>
                    <li>✓ Custom Integrations</li>
                  </ul>
                </div>
                <button style={featuredButtonStyle}>Get Started</button>
              </div>
            </ElectricBorder>
          </div>

          {/* Enterprise Plan */}
          <div style={regularCardStyle}>
            <div>
              <div style={{ 
                backgroundColor: '#333', 
                color: '#fff', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                ENTERPRISE
              </div>
              <h3 style={{ color: '#fff', margin: '0 0 8px 0', fontSize: '24px', fontWeight: '600', letterSpacing: '-0.01em' }}>Enterprise</h3>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ color: '#fff', fontSize: '36px', fontWeight: '800', letterSpacing: '-0.02em' }}>$99</span>
                <span style={{ color: '#888', fontSize: '16px' }}>/month</span>
              </div>
              <ul style={{ 
                color: '#ccc', 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                lineHeight: '1.8'
              }}>
                <li>✓ Everything in Pro</li>
                <li>✓ Unlimited Storage</li>
                <li>✓ 24/7 Phone Support</li>
                <li>✓ Custom Solutions</li>
                <li>✓ Dedicated Manager</li>
              </ul>
            </div>
            <button style={regularButtonStyle}>Contact Sales</button>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '40px',
          color: '#666',
          fontSize: '14px',
          fontWeight: '400',
          letterSpacing: '0.01em'
        }}>
          All plans include 14-day free trial • No setup fees • Cancel anytime
        </div>
      </div>

      {/* Light Mode Version */}
      <div style={{ 
        padding: '50px', 
        backgroundColor: '#f8fafc', 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            color: '#1a202c', 
            fontSize: '48px', 
            margin: '0 0 16px 0',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            lineHeight: '1.1'
          }}>
            Light Mode Pricing
          </h1>
          <p style={{ 
            color: '#4a5568', 
            fontSize: '18px', 
            margin: 0,
            maxWidth: '600px',
            fontWeight: '400',
            lineHeight: '1.6',
            letterSpacing: '-0.01em'
          }}>
            The same great plans, now optimized for light backgrounds.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '24px', 
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {/* Light Mode Basic Plan */}
          <div style={{
            ...cardStyle,
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          }}>
            <div>
              <div style={{ 
                backgroundColor: '#f7fafc', 
                color: '#4a5568', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                display: 'inline-block',
                marginBottom: '16px',
                border: '1px solid #e2e8f0'
              }}>
                BASIC
              </div>
              <h3 style={{ color: '#1a202c', margin: '0 0 8px 0', fontSize: '24px', fontWeight: '600', letterSpacing: '-0.01em' }}>Starter</h3>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ color: '#1a202c', fontSize: '36px', fontWeight: '800', letterSpacing: '-0.02em' }}>$9</span>
                <span style={{ color: '#718096', fontSize: '16px' }}>/month</span>
              </div>
              <ul style={{ 
                color: '#4a5568', 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                lineHeight: '1.8'
              }}>
                <li>✓ 5 Projects</li>
                <li>✓ 10GB Storage</li>
                <li>✓ Email Support</li>
                <li>✓ Basic Analytics</li>
              </ul>
            </div>
            <button style={{
              ...buttonStyle,
              backgroundColor: '#f7fafc',
              color: '#4a5568',
              border: '1px solid #e2e8f0',
            }}>Get Started</button>
          </div>

          {/* Light Mode Featured Plan with Electric Border */}
          <div style={{ position: 'relative', transform: 'scale(1.05)' }}>
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#6366f1',
              color: '#ffffff',
              padding: '6px 20px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
              zIndex: 10,
            }}>
              MOST POPULAR
            </div>
            <ElectricBorder
              color="#6366f1"
              speed={1.2}
              chaos={0.3}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div style={{
                ...cardStyle,
                backgroundColor: '#ffffff',
                border: 'none',
                margin: 0,
                boxShadow: '0 20px 25px rgba(99, 102, 241, 0.1), 0 10px 10px rgba(99, 102, 241, 0.04)',
              }}>
                <div>
                  <div style={{ 
                    backgroundColor: '#6366f1', 
                    color: '#ffffff', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    display: 'inline-block',
                    marginBottom: '16px',
                    fontWeight: '600'
                  }}>
                    PRO
                  </div>
                  <h3 style={{ color: '#1a202c', margin: '0 0 8px 0', fontSize: '24px', fontWeight: '600', letterSpacing: '-0.01em' }}>Professional</h3>
                  <div style={{ marginBottom: '24px' }}>
                    <span style={{ color: '#1a202c', fontSize: '36px', fontWeight: '800', letterSpacing: '-0.02em' }}>$29</span>
                    <span style={{ color: '#718096', fontSize: '16px' }}>/month</span>
                  </div>
                  <ul style={{ 
                    color: '#4a5568', 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    lineHeight: '1.8'
                  }}>
                    <li>✓ Unlimited Projects</li>
                    <li>✓ 100GB Storage</li>
                    <li>✓ Priority Support</li>
                    <li>✓ Advanced Analytics</li>
                    <li>✓ Team Collaboration</li>
                    <li>✓ Custom Integrations</li>
                  </ul>
                </div>
                <button style={{
                  ...buttonStyle,
                  backgroundColor: '#6366f1',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
                }}>Get Started</button>
              </div>
            </ElectricBorder>
          </div>

          {/* Light Mode Enterprise Plan */}
          <div style={{
            ...cardStyle,
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          }}>
            <div>
              <div style={{ 
                backgroundColor: '#f7fafc', 
                color: '#4a5568', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                display: 'inline-block',
                marginBottom: '16px',
                border: '1px solid #e2e8f0'
              }}>
                ENTERPRISE
              </div>
              <h3 style={{ color: '#1a202c', margin: '0 0 8px 0', fontSize: '24px', fontWeight: '600', letterSpacing: '-0.01em' }}>Enterprise</h3>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ color: '#1a202c', fontSize: '36px', fontWeight: '800', letterSpacing: '-0.02em' }}>$99</span>
                <span style={{ color: '#718096', fontSize: '16px' }}>/month</span>
              </div>
              <ul style={{ 
                color: '#4a5568', 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                lineHeight: '1.8'
              }}>
                <li>✓ Everything in Pro</li>
                <li>✓ Unlimited Storage</li>
                <li>✓ 24/7 Phone Support</li>
                <li>✓ Custom Solutions</li>
                <li>✓ Dedicated Manager</li>
              </ul>
            </div>
            <button style={{
              ...buttonStyle,
              backgroundColor: '#f7fafc',
              color: '#4a5568',
              border: '1px solid #e2e8f0',
            }}>Contact Sales</button>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '40px',
          color: '#718096',
          fontSize: '14px',
          fontWeight: '400',
          letterSpacing: '0.01em'
        }}>
          All plans include 14-day free trial • No setup fees • Cancel anytime
        </div>
      </div>
    </>
  );
};

export default App;