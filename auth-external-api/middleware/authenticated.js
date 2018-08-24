export default function ({ store, redirect }) {
  // If user is not authenticated,
  if (!store.state.auth) {
    return redirect('/login')
  }
}