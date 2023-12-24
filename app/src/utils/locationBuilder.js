export const getPathBasedOnSwipe = (isLeftSwipe, pathname) => {

    switch(pathname) {
        case '/home': {
            return isLeftSwipe ? '/search' : '/home'
        }
        case '/search': {
            return isLeftSwipe ? '/profile' : '/home'
        }
        case '/profile': {
            return isLeftSwipe ? '/inbox' : '/search'
        }
        case '/inbox': {
            return isLeftSwipe ? '/inbox' : '/profile'
        }
    }

}