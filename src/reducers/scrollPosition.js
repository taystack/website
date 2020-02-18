const initialState = {
  current: 0,
};

export const setScrollPosition = (current) => ({
  type: "setScrollPosition",
  current,
});

export default function scrollPosition(state, action) {
  return { current: action.current };
}
