# app/controllers/nextjs_controller.rb
class NextjsController < ApplicationController
  def index
    # Next.js 애플리케이션 빌드
    system('npm run build', chdir: Rails.root.join('path/to/nextjs/app'))
    # Next.js 애플리케이션 렌더링
    render file: Rails.root.join('path/to/nextjs/app/.next/server/pages/index.html')
  end
end
