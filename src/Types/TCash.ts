export type BanknoteNominals = 100 | 200 | 500 | 1000 | 2000 | 5000

export type Cash = {
  [key in BanknoteNominals | number]: number
}
