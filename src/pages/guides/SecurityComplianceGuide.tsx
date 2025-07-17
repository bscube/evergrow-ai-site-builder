import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { ArrowLeft, Clock, Download, Shield, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

const SecurityComplianceGuide = () => {
  return (
    <>
      <SEO 
        title="Security & Compliance Guide for AI Agents | EverGrowDigital"
        description="Comprehensive security protocols and compliance frameworks for enterprise AI deployment. Essential guide for secure AI implementation."
        keywords="AI security, compliance, data protection, enterprise AI"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/knowledge-center" 
              className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Knowledge Center
            </Link>
            
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
              Security
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
              Security & Compliance Guide for AI Agents
            </h1>
            
            <p className="text-xl text-grey-600 mb-8">
              Comprehensive security protocols and compliance frameworks for enterprise AI deployment.
            </p>
            
            <div className="flex items-center space-x-6 text-grey-500 mb-8">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>18 min read</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>Security Framework</span>
              </div>
            </div>
            
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>Security Fundamentals for AI Agents</h2>
              <p>
                AI agents handle sensitive customer data and integrate with critical business systems, 
                making security a paramount concern. This guide provides comprehensive frameworks 
                for securing your AI implementations.
              </p>

              <div className="bg-red-50 p-6 rounded-xl my-8">
                <h3 className="text-red-800 mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Critical Security Considerations
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Data Protection:</strong> Secure handling of personal and business data</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Access Control:</strong> Proper authentication and authorization</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>System Integration:</strong> Secure API connections and data flows</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Compliance:</strong> Meeting regulatory requirements</span>
                  </li>
                </ul>
              </div>

              <h2>Data Protection Framework</h2>
              
              <h3>Data Classification and Handling</h3>
              <p>
                Implement a comprehensive data classification system to ensure appropriate 
                security measures are applied based on data sensitivity levels.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <h4 className="text-green-800 font-semibold mb-2">Public Data</h4>
                  <p className="text-sm text-green-700">General information, marketing content</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl text-center">
                  <h4 className="text-amber-800 font-semibold mb-2">Internal Data</h4>
                  <p className="text-sm text-amber-700">Business processes, internal communications</p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl text-center">
                  <h4 className="text-red-800 font-semibold mb-2">Confidential Data</h4>
                  <p className="text-sm text-red-700">Personal data, financial information</p>
                </div>
              </div>

              <h3>Encryption Standards</h3>
              <div className="bg-blue-50 p-6 rounded-xl my-8">
                <h4 className="text-blue-800 mb-4">Encryption Requirements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Data at Rest:</strong> AES-256 encryption for stored data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Data in Transit:</strong> TLS 1.3 for all communications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Key Management:</strong> Hardware security modules (HSM)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Regular Rotation:</strong> Automated key rotation policies</span>
                  </li>
                </ul>
              </div>

              <h2>Access Control and Authentication</h2>
              
              <h3>Multi-Factor Authentication (MFA)</h3>
              <p>
                Implement robust authentication mechanisms for all system access, including 
                administrative interfaces and API endpoints.
              </p>

              <h3>Role-Based Access Control (RBAC)</h3>
              <div className="bg-grey-50 p-6 rounded-xl my-8">
                <h4 className="text-grey-900 mb-4">Access Control Matrix</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-grey-300">
                    <thead>
                      <tr className="bg-grey-100">
                        <th className="border border-grey-300 p-2 text-left">Role</th>
                        <th className="border border-grey-300 p-2 text-left">Permissions</th>
                        <th className="border border-grey-300 p-2 text-left">Data Access</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-grey-300 p-2">Admin</td>
                        <td className="border border-grey-300 p-2">Full system access</td>
                        <td className="border border-grey-300 p-2">All data</td>
                      </tr>
                      <tr>
                        <td className="border border-grey-300 p-2">Manager</td>
                        <td className="border border-grey-300 p-2">Configuration, monitoring</td>
                        <td className="border border-grey-300 p-2">Aggregated reports</td>
                      </tr>
                      <tr>
                        <td className="border border-grey-300 p-2">Operator</td>
                        <td className="border border-grey-300 p-2">Basic operations</td>
                        <td className="border border-grey-300 p-2">Limited access</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2>Compliance Frameworks</h2>
              
              <h3>GDPR Compliance</h3>
              <p>
                Ensure your AI agent implementation meets General Data Protection Regulation 
                requirements for handling EU citizen data.
              </p>

              <ul>
                <li><strong>Data Minimization:</strong> Collect only necessary data</li>
                <li><strong>Purpose Limitation:</strong> Use data only for stated purposes</li>
                <li><strong>Right to Erasure:</strong> Implement data deletion capabilities</li>
                <li><strong>Data Portability:</strong> Enable data export functionality</li>
                <li><strong>Consent Management:</strong> Clear opt-in/opt-out mechanisms</li>
              </ul>

              <h3>Industry-Specific Compliance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="text-purple-800 mb-3">Healthcare (HIPAA)</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Protected health information (PHI) handling</li>
                    <li>• Minimum necessary standard</li>
                    <li>• Audit logging and monitoring</li>
                    <li>• Business associate agreements</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h4 className="text-indigo-800 mb-3">Financial (PCI DSS)</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Cardholder data protection</li>
                    <li>• Network security requirements</li>
                    <li>• Regular security testing</li>
                    <li>• Vulnerability management</li>
                  </ul>
                </div>
              </div>

              <h2>Security Monitoring and Incident Response</h2>
              
              <h3>Continuous Monitoring</h3>
              <p>
                Implement comprehensive monitoring systems to detect and respond to security 
                threats in real-time.
              </p>

              <div className="bg-amber-50 p-6 rounded-xl my-8">
                <h4 className="text-amber-800 mb-4">Monitoring Checklist</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Real-time threat detection and alerting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive audit logging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Anomaly detection algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Regular security assessments</span>
                  </li>
                </ul>
              </div>

              <h3>Incident Response Plan</h3>
              <ol>
                <li><strong>Preparation:</strong> Establish response team and procedures</li>
                <li><strong>Detection:</strong> Identify and classify security incidents</li>
                <li><strong>Containment:</strong> Isolate affected systems</li>
                <li><strong>Eradication:</strong> Remove threats and vulnerabilities</li>
                <li><strong>Recovery:</strong> Restore normal operations</li>
                <li><strong>Lessons Learned:</strong> Document and improve processes</li>
              </ol>

              <h2>Best Practices Summary</h2>
              <p>
                Security is not a one-time implementation but an ongoing process. Regular 
                assessments, updates, and training are essential for maintaining a robust 
                security posture.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-green-500 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Security Assessment?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our security experts can help evaluate and strengthen your AI agent security.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-brand-green-500 hover:bg-grey-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Get Security Consultation
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default SecurityComplianceGuide;