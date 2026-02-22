import useCartStore from "./useCartStore";
import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Trash2 } from "lucide-react";

function CartItems() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = useCartStore((state) => state.cartTotal(state));

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6">
      <Card className="rounded-2xl shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">Your Cart</CardTitle>
            <Badge variant="secondary">{cart.length} items</Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">

          {cart.length === 0 ? (
            <div className="py-10 text-center space-y-3">
              <p className="text-lg font-semibold">Your cart is empty 🛒</p>
              <p className="text-sm text-muted-foreground">
                Add products to your cart to see them here.
              </p>
              <Link to="/">
                <Button className="rounded-xl">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <>

              <ScrollArea className="h-85 pr-4">
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 rounded-xl border p-3"
                    >
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-xl object-cover border"
                      />

                      {/* Name + price */}
                      <div className="flex-1">
                        <h3 className="font-semibold leading-tight line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          ₹{item.price}
                        </p>
                      </div>


                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <Separator />


              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>


              <Link to="/checkout">
                <Button className="w-full rounded-xl py-6 text-base font-semibold">
                  Proceed to Checkout
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground text-center">
                Secure checkout • Easy returns • Fast delivery 🇮🇳
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default CartItems;
