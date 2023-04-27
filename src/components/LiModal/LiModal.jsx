const LiModal = ({ ingredient, index }) => {
  if (ingredient.count) {
    return (
      <li key={index}>
        {ingredient.count} {ingredient.nm_item}
      </li>
    );
  }
};

export default LiModal;
