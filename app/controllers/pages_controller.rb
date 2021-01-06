class PagesController < ApplicationController

  http_basic_authenticate_with name: ENV["USER1"], password: ENV["PASS1"], except: :home

  def home
  end

  def impressie
  end

  def inloop
  end

  def t72
  end

  def t48
  end

  def t24
  end

  def doorbraak
  end

  def system
  end

  def videoS1
  end

  def videoS2
  end

  def journaalT72
  end

  def journaalT48
  end

  def journaalT0
  end

  def krant
  end


  def denhelder
  end

end
