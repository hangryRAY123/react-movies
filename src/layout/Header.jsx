export const Header = () => (
  <nav className='deep-purple lighten-1'>
    <div className='nav-wrapper'>
      <a href='/' className='brand-logo'>
        React Movies
      </a>
      <ul
        id='nav-mobile'
        className='right hide-on-med-and-down'
      >
        <li>
          <a
            href='https://github.com/hangryRAY123/react-movies'
            target='_blank'
            rel='noreferrer'
          >
            Repo
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
