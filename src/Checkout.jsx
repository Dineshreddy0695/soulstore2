import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "./useCartStore";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCartStore();

  // 🔥 Shipping form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fullAddress: "",
    city: "",
    state: "",
    pincode: "",
  });

  // 🔥 Payment method state
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );
  const shipping = subtotal > 2000 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!formData.firstName || !formData.phone || !formData.fullAddress) {
      alert("Please fill required shipping details.");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      shippingDetails: formData,
      paymentMethod,
      subtotal,
      shipping,
      tax,
      total,
      status: "Placed",
      date: new Date().toLocaleString(),
    };

    console.log("ORDER PLACED:", order);

    alert("🎉 Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-muted/40 py-10">
      <div className="mx-auto w-full max-w-6xl px-4">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">Checkout</h1>
          <p className="text-muted-foreground">
            Complete your purchase by filling delivery & payment details.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* Shipping Address */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Shipping Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">

                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <Textarea
                  placeholder="Full Address"
                  value={formData.fullAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, fullAddress: e.target.value })
                  }
                />

                <div className="grid gap-4 md:grid-cols-3">
                  <Input
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                  <Input
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={(e) =>
                      setFormData({ ...formData, pincode: e.target.value })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between rounded-xl border p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod">Cash on Delivery</Label>
                    </div>
                    <Badge variant="secondary">Recommended</Badge>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi">UPI / Google Pay</Label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Credit / Debit Card</Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">

                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 rounded-xl object-cover border"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.qty || 1}
                      </p>
                    </div>
                    <p className="font-semibold">
                      ₹{item.price * (item.qty || 1)}
                    </p>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-base font-bold">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <Button
                  onClick={handlePlaceOrder}
                  className="w-full rounded-xl text-base py-6"
                >
                  Place Order
                </Button>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
