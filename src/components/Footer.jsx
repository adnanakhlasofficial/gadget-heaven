const Footer = () => {
  return (
    <div className="bg-off-white py-24 text-center">
      <div className="wrapper">
        <div className="space-y-3 border-b-2 border-[#E6E6E7] pb-8">
          <h2 className="text-[2rem] font-bold text-deep-black">
            Gadget Heaven
          </h2>
          <p className="font-medium text-gray">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mt-8">
          <div className="space-y-4">
            <h3 className="text-deep-black text-xl font-bold">Services</h3>
            <ul className="space-y-2 text-gray">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-deep-black text-xl font-bold">Company</h3>
            <ul className="space-y-2 text-gray">
              <li>About Us</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-deep-black text-xl font-bold">Legal</h3>
            <ul className="space-y-2 text-gray">
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
