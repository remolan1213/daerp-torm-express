import React from 'react';

const Payroll = () => {
const charSet = "UTF-8";
const viewport = "width=device-width, initial-scale=1.0";
const googleFontsUrl = "https://fonts.googleapis.com/css?family=Poppins";
const styleSheetUrl = "style.css";
const fontAwesomeUrl = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
const pageTitle = "DreamArchers ERP";
const logoSrc = "da-logo4.svg";
const logoAlt = "logo";

const menuItems = [
  { href: "home", icon: "fas fa-home", label: "Home" },
  { href: "profile", icon: "fas fa-chart-bar", label: "Profile" },
  { href: "payroll", icon: "fas fa-users", label: "Payroll" },
  { href: "settings", icon: "fas fa-cog", label: "Settings" },
  { href: "logout", icon: "fas fa-sign-out-alt", label: "Logout" }
];

const employeeData = {
  name: "Mezha Pereyra",
  idNumber: "12345678",
  bankAccount: "AUB 916-10-522679-5",
  department: "Graphics A",
  payrollPeriod: "September 1-30, 2024",
  payrollDate: "October 9, 2024",
  client: "Waterfront Media LCC",
  clientIndustry: "Health Care",
  grossAmount: "P35,466.24",
  netAmount1: "P17,733.12",
  netAmount2: "P1,939.56",
  deductionsDescription: "None",
  deductionAmount: "P00.00",
  totalAmount: "P19,672.68"
};

return (
  <>
    <meta charSet={charSet} />
    <meta name="viewport" content={viewport} />
    <link rel="stylesheet" href={googleFontsUrl} />
    <link rel="stylesheet" href={styleSheetUrl} />
    <link rel="stylesheet" href={fontAwesomeUrl} />
    <title>{pageTitle}</title>
    <main>
      <section className="glass">
        <div className="menu-sidebar">
          <img className="logo" src={logoSrc} alt={logoAlt} />
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li className="menu-item" key={index}>
                <a href={item.href}>
                  <i className={item.icon} /> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <div className="content-title">
            {/* <h1>Payroll</h1> */}
          </div>
          <div className="card">
            <div className="card-title-bar">Payroll</div>
            <div className="basic-data">
              <div className="name">
                Name:
                <div className="name-value">{employeeData.name}</div>
              </div>
              <div className="id-number">
                ID Number:
                <div className="id-number-value">{employeeData.idNumber}</div>
              </div>
              <div className="bank-account">
                Bank Account:
                <div className="bank-account-value">{employeeData.bankAccount}</div>
              </div>
            </div>
            <div className="basic-data-2">
              <div className="department">
                Department:
                <div className="department-value">{employeeData.department}</div>
              </div>
              <div className="payroll-period">
                Payroll Period:
                <div className="payroll-period-value">{employeeData.payrollPeriod}</div>
              </div>
              <div className="payroll-date">
                Payroll Date:
                <div className="payroll-date-value">{employeeData.payrollDate}</div>
              </div>
            </div>
            <div className="payroll-data">
              <div className="client">
                Client:
                <div className="client-value">{employeeData.client}</div>
                <div className="client-value">{employeeData.clientIndustry}</div>
              </div>
              <div className="gross-amount">
                Gross:
                <div className="gross-amount-value">{employeeData.grossAmount}</div>
              </div>
              <div className="net-amount">
                Net:
                <div className="net-amount-value">{employeeData.netAmount1}</div>
                <div className="net-amount-value">{employeeData.netAmount2}</div>
              </div>
            </div>
            <div className="deductions-data">
              <div className="deductions">
                Deductions:
                <div className="description">{employeeData.deductionsDescription}</div>
              </div>
              <div className="deduction-amount">
                Amount:
                <div className="deductions-value">{employeeData.deductionAmount}</div>
              </div>
            </div>
            <div className="total-data">
              <div className="total">
                Total:
                <div className="total-value">{employeeData.totalAmount}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
);

};

export default Payroll;