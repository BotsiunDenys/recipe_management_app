# Test task for Luna Edge
First auth loading may be long: about 30-40 seconds. It causes hosting service 'feature'.
[Recipe management app](https://recipe-management-app-tawny.vercel.app)

## Description
Since time is limited, not all reqiored functional was created. For completing this test task i had spent about 6 hours (with deployment). 
Short functional that i have done: JWT Authorization and authentication (API for auth was created by me), searching for receipts by different parameters (those, that i could have accessed for free, because used open API), adding products to favorites and deleting them. Also, i had not spent too much time for design, so there's simple design with no responsiveness. (5 hours is not enough). And also tried to do the best with code quality i can for now (considering time limit of course).

## Additional libraries and stack
As required, main stack was: React, Redux, Typescript. (I hope when it was said Redux, it meant toolkit too, used toolkit from the beginning by habit).
Additional libraries:
- Redux persist - sync favorites store and localstore
- React router dom - routing
- React toastify - toasts
- Formik + yup - form and validation
- Tailwind CSS - styling
- Axios - making requests

### For backend used:
- nodeJS
- mongoDB