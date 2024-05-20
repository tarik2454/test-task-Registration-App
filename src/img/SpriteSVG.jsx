import PropTypes from 'prop-types';

export const SpriteSVG = ({ name }) => {
  switch (name) {
    case 'arrow-right':
      return (
        <svg width="20" height="15" data-name="Layer 1" viewBox="0 0 20 20">
          <path d="M23 11H6V7.639c0-.695-.852-1.044-1.35-.552L.232 11.448a.773.773 0 0 0 0 1.104l4.418 4.361c.498.492 1.35.143 1.35-.552V13h17a1 1 0 1 0 0-2Z" />
        </svg>
      );

    case 'arrow-left':
      return (
        <svg width="20" height="15" data-name="Layer 1" viewBox="0 0 20 20">
          <path d="M23.768 11.448 19.35 7.087c-.498-.492-1.35-.143-1.35.552V11H1a1 1 0 1 0 0 2h17v3.361c0 .695.852 1.044 1.35.552l4.418-4.361a.773.773 0 0 0 0-1.104Z" />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};

SpriteSVG.propTypes = {
  name: PropTypes.string.isRequired,
};
