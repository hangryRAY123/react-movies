export const Footer = () => (
  <footer className='page-footer deep-purple lighten-1'>
    <div className='footer-copyright'>
      <div className='container'>
        © {new Date().getFullYear()} Copyright Text
        <a
          className='grey-text text-lighten-4 right'
          href='https://github.com/hangryRAY123/react-movies'
          target='_blank'
          rel='noreferrer'
        >
          Repo
        </a>
      </div>
    </div>
  </footer>
);
