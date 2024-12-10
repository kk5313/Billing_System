import { Input } from '../ui/input';
import { Button } from '../ui/button';

function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-blue-700 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        {/* <p className="text-xs md:text-sm text-gray-500 text-center">
          アカウントをお持ちですか？ <span className="text-black">Sign up</span>
        </p> */}
        <div className="w-full flex flex-col gap-3">
          <div>
            <Input type="email" placeholder="メール"></Input>
          </div>
          <div>
            <Input type="password" placeholder="パスワード"></Input>
          </div>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
