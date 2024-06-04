const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 py-4 mt-auto">
        <div className="container mx-auto text-center text-white">
          <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;