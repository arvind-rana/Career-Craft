/** @type {import('next').NextConfig} */


const nextConfig = {
    /** @type {import('next').NextConfig} */
    images: {
      domains: ['img.freepik.com'],
      domains: ['cdn.vectorstock.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'randomuser.me',
          port: '',
          pathname: '/api/portraits/**',
        },
      ],
    },
    
  };
  
 
  

export default nextConfig;
